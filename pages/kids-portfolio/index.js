/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import { NextSeo } from "next-seo";
import lozad from "lozad";
import Link from "next/link";
import gql from "graphql-tag";
import Client from "../../utils/prismicClient";
import SecondaryHeroSection from "../../components/hero/SecondaryHeroSection";

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
          },
        }}
      />
      <section className="wrapper light-wrapper">
        <div className="container inner">
          <div className="tiles text-center">
            <div className="items row">
              {edges?.map((item, index) => (
                <PortfolioItem
                  key={index}
                  data={item}
                  uid={item?.node?._meta?.uid}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const PortfolioItem = ({ data, uid }) => {
  const { image, location, heading, type } = data?.node?.body?.[0]?.primary;
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
