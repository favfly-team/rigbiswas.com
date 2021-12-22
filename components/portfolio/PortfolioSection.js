/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Heading from '../heading/Heading';

const PortfolioSection = ({ slice }) => {
	// console.log(slice);
	return (
		<section className='wrapper light-wrapper'>
			<div className='container inner'>
				<Heading data={slice} />
				<div className='tiles text-center'>
					<div className='items row'>
						{slice?.items?.map((item, index) => (
							<PortfolioItem key={index} data={item} />
						))}
					</div>
					{slice?.items?.length < 7 && (
						<Link href='/wedding-portfolio'>
							<a className='btn shadow'>View More</a>
						</Link>
					)}
				</div>
			</div>
		</section>
	);
};

const PortfolioItem = ({ data }) => {
	const { image, location, title, type, link } = data;
	return (
		<div className='item col-md-6 col-lg-4'>
			<figure className='overlay overlay1 rounded mb-20'>
				<Link href={`/wedding-portfolio/${link?.uid}`}>
					<a>
						<img data-src={image.url} alt={image.alt} className='lozad' />
					</a>
				</Link>
			</figure>
			<h4 className='mb-0'>{title[0]?.text}</h4>
			<div className='meta'>
				<span className='count'>{location[0]?.text}</span>
				<span className='category'>{type[0]?.text}</span>
			</div>
		</div>
	);
};

export default PortfolioSection;
