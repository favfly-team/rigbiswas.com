import { useEffect } from 'react';
import lozad from 'lozad';
import Prismic from '@prismicio/client';
import { Client } from '../utils/prismicHelpers';
import { queryRepeatableDocuments } from '../utils/queries';
import { SliceZone } from '../slices';
import SEO from '../components/seo/SEO';

import BlogsSection from '../components/blog/BlogsSection';

const ServicePage = ({ doc, blogPosts }) => {
	// console.log(doc);
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
			<SEO doc={doc} url='https://rigbiswas.com/' />
			<SliceZone sliceZone={doc.data.body} />
			<BlogsSection posts={blogPosts} />
		</>
	);
};

export async function getStaticPaths() {
	const documents = await queryRepeatableDocuments(
		(doc) => doc.type === 'service_page'
	);
	return {
		paths: documents.map((doc) => {
			return { params: { slug: doc.uid } };
		}),
		fallback: 'blocking',
	};
}

export async function getStaticProps({
	preview = null,
	previewData = {},
	params,
}) {
	const { ref } = previewData;

	const client = Client();

	const doc =
		(await client.getByUID(
			'service_page',
			params.slug,
			ref ? { ref } : null
		)) || {};

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

export default ServicePage;
