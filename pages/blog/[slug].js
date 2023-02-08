import { useEffect } from "react";
import lozad from "lozad";
import { NextSeo } from "next-seo";
import Prismic from "@prismicio/client";
import { Client } from "../../utils/prismicHelpers";
// import { queryRepeatableDocuments } from "../../utils/queries";

import BlogPostSection from "../../components/blog/BlogPostSection";
import CtaFormSection from "../../components/cta/CtaFormSection";
import BlogsSection from "../../components/blog/BlogsSection";

const BlogPostPage = ({ doc, blogPosts }) => {
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
      <NextSeo
        title={doc?.data?.title[0]?.text}
        description={doc?.data?.description[0]?.text}
        canonical={`https://rigbiswas.com/blog/${doc?.uid}`}
        openGraph={{
          url: `https://rigbiswas.com/${doc?.uid}`,
          title: doc?.data?.title[0]?.text,
          description: doc?.data?.description[0]?.text,
          type: "article",
          article: {
            publishedTime: doc?.first_publication_date,
            modifiedTime: doc?.last_publication_date,
            authors: [`https://rigbiswas.com/about-rig`],
          },
          images: [
            {
              url: doc?.data?.featured_image?.url,
              width: 1200,
              height: 600,
              alt:
                doc?.data?.featured_image?.alt || doc?.data?.title?.[0]?.text,
            },
            {
              url: doc?.data?.featured_image?.large?.url,
              width: 1024,
              height: 524,
              alt:
                doc?.data?.featured_image?.alt || doc?.data?.title?.[0]?.text,
            },
            {
              url: doc?.data?.featured_image?.medium?.url,
              width: 300,
              height: 150,
              alt:
                doc?.data?.featured_image?.alt || doc?.data?.title?.[0]?.text,
            },
            {
              url: doc?.data?.featured_image?.thumbnail?.url,
              width: 150,
              height: 150,
              alt:
                doc?.data?.featured_image?.alt || doc?.data?.title?.[0]?.text,
            },
          ],
        }}
        robotsProps={{
          nosnippet: false,
          notranslate: false,
          noimageindex: false,
          noarchive: false,
          maxSnippet: -1,
          maxImagePreview: "large",
          maxVideoPreview: -1,
        }}
      />
      <BlogPostSection data={doc?.data} uid={doc?.uid} />
      <CtaFormSection
        slice={{
          primary: {
            heading: [
              {
                spans: [],
                text: "Get Amazing Wedding Photography Quote",
                type: "heading2",
              },
            ],
            description: [
              {
                spans: [],
                text: "We have photographers and videographers to give your wedding album and pre-wedding video the complete cinematic feel.",
                type: "paragraph",
              },
            ],
            background_image: {
              url: "https://images.prismic.io/rigbiswas/8fa3e837-9a26-4235-a409-acdb3f40232c_bg-image.jpeg?auto=compress,format&rect=0,0,1600,800&w=1200&h=600",
            },
          },
        }}
      />

      <BlogsSection posts={blogPosts} />
    </>
  );
};

// export async function getStaticPaths() {
//   const documents = await queryRepeatableDocuments(
//     (doc) => doc.type === "blog_post"
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
    (await client.getByUID("blog_post", params.slug, ref ? { ref } : null)) ||
    {};

  const blogPosts = await client.query(
    Prismic.Predicates.at("document.type", "blog_post"),
    { pageSize: 3, orderings: "[my.blog_post.published_date desc]" }
  );

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
      blogPosts,
    },
    // revalidate: 60,
  };
}

export default BlogPostPage;
