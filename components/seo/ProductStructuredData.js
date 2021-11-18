import { ProductJsonLd } from 'next-seo';

const ProductStructuredData = () => {
	return (
		<>
			<ProductJsonLd
				productName='Photography'
				image='https://www.bongweddingphotography.com/images/birdlens-creation-wedding-photography-service.jpg'
				description='Birdlens Creation - Best Wedding photographer in Kolkata, We provide Bengali Wedding, Marwari Wedding, Pre Wedding services in Kolkata Since 2015'
				brand='Birdlens Creation'
				sku='8910575255'
				reviews={{
					'@type': 'Review',
					name: 'Sanjoy Roy',
					reviewBody:
						'Best wedding photographer in Kolkata in my eyes. Quality Work, Good Teamwork and well behavior.Best of Luck',
					reviewRating: { '@type': 'Rating', ratingValue: '5' },
					datePublished: '2019-07-10',
					author: { '@type': 'Person', name: 'Sanjoy Roy' },
					publisher: { '@type': 'Organization', name: 'google' },
				}}
				aggregateRating={{
					'@type': 'AggregateRating',
					ratingValue: '5',
					bestRating: '5',
					worstRating: '4.5',
					ratingCount: '199',
				}}
				offers={{
					'@type': 'AggregateOffer',
					url: 'https://www.bongweddingphotography.com/our-services',
					priceCurrency: 'INR',
					lowPrice: '15000',
					highPrice: '90000',
					offerCount: '1',
				}}
				mpn='0'
			/>
		</>
	);
};

export default ProductStructuredData;
