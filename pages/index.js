import { useEffect } from 'react';
import lozad from 'lozad';
import Prismic from '@prismicio/client';
import { Client } from '../utils/prismicHelpers';
import { SliceZone } from '../slices';
import SEO from '../components/seo/SEO';

import BlogsSection from '../components/blog/BlogsSection';

const IndexPage = ({ doc, blogPosts, posts }) => {
	// console.log(blogPosts);
	// ========== LOZAD INSTANTIATE ==========
	useEffect(() => {
		const observer = lozad('.lozad', {
			rootMargin: '100px 0px', // syntax similar to that of CSS Margin
		});
		observer.observe();
		return () => {};
	}, [doc?.uid]);
	// ========== END ==========
	return (
		<>
			<SEO doc={doc} url='https://rigbiswas.com' />
			<SliceZone sliceZone={doc.data.body} />
			<BlogsSection posts={blogPosts} />
		</>
	);
};

export async function getStaticProps({ preview = null, previewData = {} }) {
	const { ref } = previewData;
	const client = Client();
	const doc = (await client.getSingle('home_page', ref ? { ref } : null)) || {};

	const blogPosts = await client.query(
		Prismic.Predicates.at('document.type', 'blog_post'),
		{ pageSize: 6, orderings: '[my.blog_post.published_date desc]' }
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
			blogPosts,
			preview,
		},
		revalidate: 60,
	};
}

export default IndexPage;
