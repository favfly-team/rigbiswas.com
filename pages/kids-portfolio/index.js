/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { NextSeo } from "next-seo";
import lozad from "lozad";
import Link from "next/link";
import gql from "graphql-tag";
import Client from "../../utils/prismicClient";
import SecondaryHeroSection from "../../components/hero/SecondaryHeroSection";
import Filter from "../../components/filter/Filter";

const PortfolioPage = ({ doc }) => {
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
    "Maternity",
    "Baby Shower",
    "Newborn",
    "Baby Theme Shoot & Portfolio",
    "Rice Ceremony",
    "Birthday Party",
    "Family Shoot",
  ];

  const [active, setActive] = useState("All");

  return (
    <>
      <NextSeo
        title="Kids Photography Portfolio From Rig Photography"
        description="Make your best moment more special through Best Kids Videography by Rig Photography, a highly professional kids Photography & Videography team."
        canonical="https://rigbiswas.com/kids-portfolio"
      />
      <SecondaryHeroSection
        slice={{
          primary: {
            heading: [
              {
                spans: [],
                type: "heading1",
                text: "Kids Photography Portfolio From Rig Photography",
              },
            ],
            description: [
              {
                spans: [],
                type: "paragraph",
                text: "Make your best moment more special through Best Kids Videography by Rig Photography, a highly professional kids Photography & Videography team in Kolkata.",
              },
            ],
            image: {
              url: "https://images.prismic.io/rigbiswas/4cd6ac72-64b7-4d0f-b394-2e49ce073f2c_Diyara+%26+Daibika.jpg?auto=compress,format&w=1500",
            },
          },
        }}
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
  useEffect(() => {
    const observer = lozad(".lozad", {
      rootMargin: "100px 0px", // syntax similar to that of CSS Margin
    });
    observer.observe();
    return () => {};
  }, []);

  return (
    <div className="item col-md-6 col-lg-4">
      <figure className="overlay overlay1 rounded mb-20">
        <Link href={`/kids-portfolio/${uid}`}>
          <a>
            <img data-src={image.url} alt={image.alt} className="lozad" />
          </a>
        </Link>
      </figure>
      <h4 className="mb-0">{heading[0]?.text}</h4>
      <div className="meta">
        <span className="count">{location[0]?.text}</span>
        <span className="category">{type[0]?.text}</span>
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

export async function getServerSideProps() {
  const client = Client;

  const doc = await client.query({
    query: gql`
      query {
        allPortfolio_pages(
          sortBy: published_date_DESC
          where: { type: "Kids" }
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
    },
    // revalidate: 60,
  };
}

export default PortfolioPage;
