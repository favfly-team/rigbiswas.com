import { useEffect } from "react";
import lozad from "lozad";
import { Client } from "../../utils/prismicHelpers";
import gql from "graphql-tag";
import pClient from "../../utils/prismicClient";
import { SliceZone } from "../../slices";
import SEO from "../../components/seo/SEO";
import SecondaryHeroSection from "../../components/hero/SecondaryHeroSection";
import FilmsPlaylistSection from "../../components/film/FilmsPlaylistSection";

const FilmsPage = ({ doc, filmsList }) => {
  // console.log(doc);
  // ========== LOZAD INSTANTIATE ==========
  useEffect(() => {
    const observer = lozad(".lozad", {
      rootMargin: "100px 0px", // syntax similar to that of CSS Margin
    });
    observer.observe();
    return () => {};
  }, [doc?.uid]);
  // ========== END ==========

  const edges = filmsList?.data?.allFilm_pages?.edges;

  return (
    <>
      <SEO doc={doc} url="https://rigbiswas.com/films" />

      <SecondaryHeroSection
        slice={{
          primary: {
            heading: [
              {
                spans: [],
                type: "heading1",
                text: "Best Wedding Films From Rig Photography",
              },
            ],
            description: [
              {
                spans: [],
                type: "paragraph",
                text: "Make your best moment more special through Best Wedding Videography by Rig Photography. We have expertise with a highly professional wedding Photography & Videography team in Kolkata.",
              },
            ],
            image: {
              url: "https://images.prismic.io/rigbiswas/13d10113-d8e6-4d20-9503-312b1cfbbd65_sikh+wedding+4-min.jpg?auto=compress,format&w=1500",
            },
          },
        }}
      />

      <FilmsPlaylistSection edges={edges} />
    </>
  );
};

export async function getServerSideProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;
  const client = Client();
  const doc =
    (await client.getSingle("films_page", ref ? { ref } : null)) || {};

  // const blogPosts = await client.query(
  // 	Prismic.Predicates.at('document.type', 'blog_post'),
  // 	{ pageSize: 6, orderings: '[my.blog_post.published_date desc]' }
  // );

  if (doc.id == undefined) {
    return {
      props: null,
      notFound: true,
    };
  }

  const filmsList = await pClient.query({
    query: gql`
      query {
        allFilm_pages(sortBy: published_date_DESC, first: 99) {
          edges {
            node {
              portfolio_name
              thumbnail
              _meta {
                uid
              }
              body {
                ... on Film_pageBodyFilms_section {
                  fields {
                    image
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
      filmsList,
      preview,
    },
    // revalidate: 60,
  };
}

export default FilmsPage;
