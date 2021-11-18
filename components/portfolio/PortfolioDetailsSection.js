/* eslint-disable @next/next/no-img-element */
import YouTube from 'react-youtube';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic-configuration';

const PortfolioDetailsSection = ({ slice }) => {
	// console.log(slice);
	const { heading, details, video_id } = slice.primary;
	const opts = {
		playerVars: {
			autoplay: 0,
			enablejsapi: 1,
			iv_load_policy: 3,
			modestbranding: 1,
			rel: 0,
			// controls: 0,
		},
	};
	return (
		<section className='wrapper light-wrapper'>
			<div className='container inner'>
				<div className='video-wrapper'>
					<YouTube
						className='bg-pastel-yellow'
						videoId={video_id?.[0]?.text}
						opts={opts}
					/>
				</div>

				<div className='gray-wrapper mt-60 px-5 py-4'>
					<h1 className='text-center'>{heading[0]?.text}</h1>
					<div>
						<RichText render={details} linkResolver={linkResolver} />
					</div>
				</div>

				<div className='mt-60'>
					<div className='row'>
						{slice?.items?.map((item, index) => (
							<GalleryItem key={index} data={item} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

const GalleryItem = ({ data }) => {
	const { image } = data;
	return (
		<div className='item col-md-6 col-lg-4'>
			<figure className='overlay overlay1 rounded mb-30'>
				<img data-src={image?.url} alt={image?.alt} className='lozad' />
			</figure>
		</div>
	);
};

export default PortfolioDetailsSection;
