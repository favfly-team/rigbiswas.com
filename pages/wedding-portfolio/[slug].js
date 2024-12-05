import { useEffect } from "react";
import lozad from "lozad";
import { Client } from "../../utils/prismicHelpers";
// import { queryRepeatableDocuments } from "../../utils/queries";
import { SliceZone } from "../../slices";
import SEO from "../../components/seo/SEO";

// import CtaFormSection from '../../components/cta/CtaFormSection';
// import PortfolioSection from '../../components/portfolio/PortfolioSection';

const PortfolioSinglePage = ({ doc }) => {
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
      <SEO
        doc={doc}
        url={`https://rigbiswas.com/wedding-portfolio/${doc?.uid}`}
      />
      <SliceZone sliceZone={doc.data.body} />
    </>
  );
};

// export async function getStaticPaths() {
//   const documents = await queryRepeatableDocuments(
//     (doc) => doc.data.type === "Wedding"
//   );
//   return {
//     paths: documents.map((doc) => {
//       return { params: { slug: doc.uid } };
//     }),
//     fallback: "blocking",
//   };
// }

export async function getServerSideProps({
  preview = null,
  previewData = {},
  params,
}) {
  const { ref } = previewData;

  const client = Client();

  const doc =
    (await client.getByUID(
      "portfolio_page",
      params.slug,
      ref ? { ref } : null
    )) || {};

  // const blogPosts = await client.query(
  // 	Prismic.Predicates.at('document.type', 'blog_post'),
  // 	{ pageSize: 6, orderings: '[my.blog_post.date desc]' }
  // );

  if (doc.id == undefined || doc?.data?.type !== "Wedding") {
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

export default PortfolioSinglePage;
