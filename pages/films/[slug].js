import { useEffect } from "react";
import lozad from "lozad";
import { Client } from "../../utils/prismicHelpers";
// import { queryRepeatableDocuments } from "../../utils/queries";
import { SliceZone } from "../../slices";
import SEO from "../../components/seo/SEO";
import VideoHeroSection from "../../components/hero/VideoHeroSection";

// import CtaFormSection from '../../components/cta/CtaFormSection';
// import PortfolioSection from '../../components/portfolio/PortfolioSection';

const FilmPage = ({ doc }) => {
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
  const data = {
    title: "Best Wedding Films From Rig Photography",
    description:
      "Make your best moment more special through Best Wedding Videography by Rig Photography. We have expertise with a highly professional wedding Photography & Videography team in Kolkata.",
    video:
      "https://res.cloudinary.com/dhzllfqqt/video/upload/v1684439815/Home_Page_Mashup_Videod_xqgwtx.mp4",
  };

  return (
    <>
      <SEO doc={doc} url={`https://rigbiswas.com/films/${doc?.uid}`} />

      <VideoHeroSection data={data} />

      <SliceZone sliceZone={doc.data.body} />
    </>
  );
};

export async function getServerSideProps({
  preview = null,
  previewData = {},
  params,
}) {
  const { ref } = previewData;

  const client = Client();

  const doc =
    (await client.getByUID("film_page", params.slug, ref ? { ref } : null)) ||
    {};

  // const blogPosts = await client.query(
  // 	Prismic.Predicates.at('document.type', 'blog_post'),
  // 	{ pageSize: 6, orderings: '[my.blog_post.date desc]' }
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
      preview,
    },
    // revalidate: 60,
  };
}

export default FilmPage;
