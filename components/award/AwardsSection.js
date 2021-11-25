/* eslint-disable @next/next/no-img-element */
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic-configuration';

const AwardsSection = ({ slice }) => {
	// console.log(slice);
	const { heading, description } = slice.primary;
	return (
		<section className='wrapper light-wrapper'>
			<div className='container inner'>
				<h2 className='section-title section-title-upper larger text-center'>
					{heading[0]?.text}
				</h2>
				<div className='lead text-center'>
					<RichText render={description} linkResolver={linkResolver} />
				</div>

				<Carousel
					emulateTouch
					autoPlay
					interval={3500}
					infiniteLoop
					showArrows
					showIndicators
					showThumbs={false}>
					{slice?.items.map((item, index) => (
						<FeaturedReview key={index} data={item} />
					))}
				</Carousel>
			</div>
		</section>
	);
};

const FeaturedReview = ({ data }) => {
	return (
		<div className='cbp-item award'>
			<div className='row'>
				<div className='col-md-6'>
					<figure>
						<img
							className='lozad'
							data-src={data?.image?.url}
							alt={data?.image?.alt}
						/>
					</figure>
				</div>
			</div>
		</div>
	);
};

export default AwardsSection;
