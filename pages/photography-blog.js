/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import lozad from 'lozad';
import Link from 'next/link';
import dayjs from 'dayjs';
dayjs().format();
import countapi from 'countapi-js';
import gql from 'graphql-tag';
import Client from '../utils/prismicClient';
import SecondaryHeroSection from '../components/hero/SecondaryHeroSection';

const BlogPage = ({ doc }) => {
	// console.log(doc);
	const edges = doc?.data?.allBlog_posts?.edges;
	// ========== LOZAD INSTANTIATE ==========
	useEffect(() => {
		const observer = lozad('.lozad', {
			rootMargin: '100px 0px', // syntax similar to that of CSS Margin
		});
		observer.observe();
		return () => {};
	}, []);
	// ========== END ==========
	return (
		<>
			<NextSeo
				title='Photography Blog From Rig Photography | Rig Biswas'
				description='Make your photography session more special through our photography tips & wedding ideas - Rig Photography'
				canonical='https://rigbiswas.com/photography-blog'
			/>
			<SecondaryHeroSection
				slice={{
					primary: {
						heading: [
							{
								spans: [],
								type: 'heading1',
								text: 'Photography Blog From Rig Photography',
							},
						],
						description: [
							{
								spans: [],
								type: 'paragraph',
								text: 'Make your photography session more special through our photography tips & wedding ideas - Rig Biswas',
							},
						],
					},
				}}
			/>

			<div className='wrapper light-wrapper'>
				<div className='container inner'>
					<div className='row isotope grid boxed list-view'>
						{edges?.map((item, index) => (
							<BlogItem key={index} data={item} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};

const BlogItem = ({ data }) => {
	// console.log(data);
	const { title, featured_image, published_date, _meta } = data?.node;
	/* ===== COUNT & UPDATE NO. OF VIEWS ===== */
	const [views, setViews] = useState(0);
	useEffect(() => {
		countapi.get('rigbiswas.com', _meta?.uid).then((result) => {
			result?.value && setViews(result.value);
		});
	}, [_meta?.uid]);
	/* ===== END ===== */
	return (
		<div className='item post grid-sizer col-md-6 col-lg-4 paper print'>
			<figure className='overlay overlay1 mb-30 rounded'>
				<Link href={`/blog/${_meta?.uid}`}>
					<a>
						<img
							data-src={featured_image?.thumb?.url}
							alt={featured_image?.alt}
							className='lozad'
						/>
					</a>
				</Link>
			</figure>
			<h4 className='post-title mb-10 font-weight-normal'>
				<Link href={`/blog/${_meta?.uid}`}>
					<a>{title?.[0]?.text}</a>
				</Link>
			</h4>
			<div className='meta mb-15'>
				<span className='date'>
					{dayjs(published_date).format('DD MMM, YYYY')}
				</span>
				<span className='views text-lowercase'>
					<span>{views}</span> views
				</span>
			</div>
		</div>
	);
};

export async function getStaticProps() {
	const client = Client;

	const doc = await client.query({
		query: gql`
			query {
				allBlog_posts(sortBy: published_date_DESC) {
					edges {
						node {
							title
							featured_image
							published_date
							_meta {
								uid
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
		revalidate: 60,
	};
}

export default BlogPage;
