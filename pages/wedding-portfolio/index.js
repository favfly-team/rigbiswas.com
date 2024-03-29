/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { NextSeo } from "next-seo";
import lozad from "lozad";
import Link from "next/link";
import gql from "graphql-tag";
import pClient from "../../utils/prismicClient";
import { Client } from "../../utils/prismicHelpers";
import SecondaryHeroSection from "../../components/hero/SecondaryHeroSection";
import Filter from "../../components/filter/Filter";

const PortfolioPage = ({ doc, page }) => {
  // console.log(doc);
  const edges = doc?.data?.allPortfolio_pages?.edges;

  // ========== LOZAD INSTANTIATE ==========
  useEffect(() => {
    const observer = lozad(".lozad", {
      rootMargin: "100px 0px", // syntax similar to that of CSS Margin
    });
    observer.observe();
    return () => {};
  }, []);
  // ========== END ==========

  const filterData = [
    "All",
    "Marwari Wedding",
    "Bengali Wedding",
    "Destination Wedding",
    "Destination Prewedding",
    "Bihari Wedding",
    "Muslim Wedding",
    "Christian Wedding",
    "Mehendi & Sangeet",
    "Engagement",
    "Sikh & Punjabi Wedding",
    "Marathi Wedding",
    "Tamil Wedding",
    "South Indian Wedding",
    "North Indian Wedding",
    "Prewedding In Kolkata",
    "Anniversary",
  ];

  const [active, setActive] = useState("All");

  return (
    <>
      <NextSeo
        title="Wedding Photography Portfolio From Rig Photography"
        description="Make your best moment more special through Best Wedding Videography by Rig Photography, a highly professional wedding Photography & Videography team."
        canonical="https://rigbiswas.com/wedding-portfolio"
      />
      <SecondaryHeroSection
        slice={
          page.data.body.filter(
            (item) => item.slice_type == "secondary_hero_section"
          )?.[0]
        }
      />
      <section className="wrapper light-wrapper">
        <div className="container inner">
          <div className="tiles text-center">
            {/* ===== Filter ===== */}
            <Filter
              filterData={filterData}
              active={active}
              setActive={setActive}
            />

            <div className="items row">
              {edges?.map(
                (item, index) =>
                  (active == "All" ||
                    !!item?.node?.category_list?.filter(
                      (item) => item?.category == active
                    ).length) && (
                    <PortfolioItem
                      key={index}
                      data={item}
                      uid={item?.node?._meta?.uid}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .wrapper {
          min-height: 600px;
        }
      `}</style>
    </>
  );
};

const PortfolioItem = ({ data, uid }) => {
  const { image, location, heading, type } = data?.node?.body?.[0]?.primary;

  // ========== LOZAD INSTANTIATE ==========
  // useEffect(() => {
  //   const observer = lozad(".lozad", {
  //     rootMargin: "100px 0px", // syntax similar to that of CSS Margin
  //   });
  //   observer.observe();
  //   return () => {};
  // }, []);
  // ========== END ==========

  return (
    <div className="item col-md-6 col-lg-4">
      <figure className="overlay overlay1 rounded mb-20">
        <Link href={`/wedding-portfolio/${uid}`}>
          <a>
            <img
              key={image.url}
              src={image.url}
              // data-src={image.url}
              alt={image.alt}
              // className="lozad"
            />
          </a>
        </Link>
      </figure>
      <h4 className="mb-0">{heading?.[0]?.text}</h4>
      <div className="meta">
        <span className="count">{location?.[0]?.text}</span>
        <span className="category">{type?.[0]?.text}</span>
      </div>
      <style jsx>{`
        .rounded {
          border-radius: 20px !important;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export async function getServerSideProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;

  const client = Client();

  const page =
    (await client.getSingle("wedding_page", ref ? { ref } : null)) || {};

  const prismicClient = pClient;

  const doc = await prismicClient.query({
    query: gql`
      query {
        allPortfolio_pages(
          sortBy: published_date_DESC
          where: { type: "Wedding" }
          first: 100
        ) {
          edges {
            node {
              category_list {
                category
              }
              _meta {
                uid
              }
              body {
                ... on Portfolio_pageBodyPortfolio_details_section {
                  primary {
                    image
                    heading
                    video_id
                    details
                    location
                    type
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      doc,
      page,
    },
    // revalidate: 60,
  };
}

export default PortfolioPage;
