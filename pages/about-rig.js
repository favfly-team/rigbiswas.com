import { useEffect } from "react";
import lozad from "lozad";
import { Client } from "../utils/prismicHelpers";
import { SliceZone } from "../slices";
import SEO from "../components/seo/SEO";

const AboutPage = ({ doc }) => {
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

  return (
    <>
      <SEO doc={doc} url="https://rigbiswas.com/about-rig" />
      <SliceZone
        sliceZone={doc.data.body.filter(
          (item) => item.slice_type != "secondary_hero_section"
        )}
      />
    </>
  );
};

export async function getServerSideProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;
  const client = Client();
  const doc =
    (await client.getSingle("about_page", ref ? { ref } : null)) || {};

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

  return {
    props: {
      doc,
      // blogPosts,
      preview,
    },
    // revalidate: 60,
  };
}

export default AboutPage;
