import { NextSeo } from 'next-seo';

// TOOLS: SCHEMA GENERATOR => https://technicalseo.com/tools/schema-markup-generator/
// TOOLS: TEST RICH RESULTS => https://search.google.com/test/rich-results
// TOOLS: STRUCTURED DATA TESTING TOOL => https://search.google.com/structured-data/testing-tool/u/0/
// FOR SEO CHECK => https://www.npmjs.com/package/react-structured-data
// GOOGLE SEARCH GALLERY => https://developers.google.com/search/docs/guides/search-gallery
// CHECK META TAGS AND PREVIEW => https://metatags.io/

function SEO({ doc, url }) {
	// console.log(doc.data);
	const { title, description, featured_image } = doc?.data;

	return (
		<NextSeo
			title={title?.[0]?.text}
			description={description?.[0]?.text}
			canonical={url}
			openGraph={{
				url: url,
				title: title?.[0]?.text,
				description: description?.[0]?.text,
				images: [
					{
						url: featured_image?.url,
						width: 1200,
						height: 600,
						alt: featured_image?.alt || title?.[0]?.text,
					},
					{
						url: featured_image?.large?.url,
						width: 1024,
						height: 524,
						alt: featured_image?.alt || title?.[0]?.text,
					},
					{
						url: featured_image?.medium?.url,
						width: 300,
						height: 150,
						alt: featured_image?.alt || title?.[0]?.text,
					},
					{
						url: featured_image?.thumbnail?.url,
						width: 150,
						height: 150,
						alt: featured_image?.alt || title?.[0]?.text,
					},
				],
				site_name: 'rigbiswas',
			}}
			robotsProps={{
				nosnippet: false,
				notranslate: false,
				noimageindex: false,
				noarchive: false,
				maxSnippet: -1,
				maxImagePreview: 'large',
				maxVideoPreview: -1,
			}}
		/>
	);
}

export default SEO;
