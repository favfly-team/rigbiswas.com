/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { NextSeo } from "next-seo";
import lozad from "lozad";
import Link from "next/link";
import gql from "graphql-tag";
import pClient from "../../utils/prismicClient";
import { Client } from "../../utils/prismicHelpers";
import Filter from "../../components/filter/Filter";
import {
  AboutHeroSection,
  FilmsSection,
  MasonryGallerySection,
} from "../../slices";
import { BsGridFill, BsImages, BsPlayFill } from "react-icons/bs";

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
    "Maternity",
    "Baby Shower",
    "Newborn",
    "Baby Theme Shoot & Portfolio",
    "Rice Ceremony",
    "Birthday Party",
    "Family Shoot",
  ];

  // console.log(
  //   page.data.body.filter(
  //     (item) => item.slice_type == "about_hero_section"
  //   )?.[0]
  // );

  const [active, setActive] = useState("All");

  const [activeSection, setActiveSection] = useState("gallery");

  return (
    <>
      <NextSeo
        title="Kids Photography Portfolio From Rig Photography"
        description="Make your best moment more special through Best Kids Videography by Rig Photography, a highly professional kids Photography & Videography team."
        canonical="https://rigbiswas.com/kids-portfolio"
      />
      <AboutHeroSection
        slice={
          page.data.body.filter(
            (item) => item.slice_type == "about_hero_section"
          )?.[0]
        }
      />

      {/* filter start */}
      <div className="filter">
        <div
          className={`filterItem left ${
            activeSection == "gallery" ? "active" : ""
          }`}
          onClick={() => setActiveSection("gallery")}>
          <i>
            <BsGridFill />
          </i>
          <span className="ml-6">Gallery</span>
        </div>
        <div
          className={`filterItem  ${
            activeSection == "portfolio" ? "active" : ""
          }`}
          onClick={() => setActiveSection("portfolio")}>
          <i>
            <BsImages />
          </i>
          <span className="ml-6">Portfolio</span>
        </div>
        <div
          className={`filterItem right ${
            activeSection == "videos" ? "active" : ""
          }`}
          onClick={() => setActiveSection("videos")}>
          <i className="play-icon">
            <BsPlayFill />
          </i>
          <span className="ml-3">Videos</span>
        </div>
      </div>

      {/* gallery section  */}
      {activeSection == "gallery" && (
        <div className="mt-40">
          <MasonryGallerySection
            slice={
              page.data.body.filter(
                (item) => item.slice_type == "masonry_gallery_section"
              )?.[0]
            }
          />
        </div>
      )}

      {/* portfolio section  */}
      {activeSection == "portfolio" && (
        <section className="wrapper">
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
      )}

      {/* videos section  */}
      {activeSection == "videos" && (
        <FilmsSection
          bgNone={true}
          slice={
            page.data.body.filter(
              (item) => item.slice_type == "films_section"
            )?.[0]
          }
        />
      )}

      <style jsx>{`
        .wrapper {
          min-height: 600px;
        }
        .filterItem {
          padding: 10px 20px;
          background: #e7e7e7;
          font-weight: 600;
          display: flex;
          align-items: center;
          font-size: 20px;
          margin-top: 60px;
          margin-left: 1px;
          margin-right: 1px;
          color: #515151;
          letter-spacing: 1px;
          cursor: pointer;
        }
        .active {
          background: #331c64;
          color: #fff;
        }
        .play-icon {
          font-size: 24px;
        }
        .left {
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }
        .right {
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
        }
        .filterItem i {
          position: relative;
          top: -1px;
        }
        .filter {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @media (max-width: 591px) {
          .filterItem {
            padding: 6px 10px;
            font-size: 14px;
          }
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
            <img
              key={image.url}
              data-src={image.url}
              alt={image.alt}
              className="lozad"
            />
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

export async function getServerSideProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;

  const client = Client();

  const page =
    (await client.getSingle("kids_page", ref ? { ref } : null)) || {};

  const prismicClient = pClient;
  const doc = await prismicClient.query({
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
      page,
    },
    // revalidate: 60,
  };
}

export default PortfolioPage;
