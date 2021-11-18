/* eslint-disable @next/next/no-img-element */
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic-configuration';

const AboutSection = ({ slice }) => {
	// console.log(slice);
	const { heading, image, about_title, about_details, list_title } =
		slice?.primary;
	return (
		<section>
			<div className='wrapper light-wrapper'>
				<div className='container inner'>
					<h2 className='lead larger text-center mb-20'>
						<strong className='font-weight-normal'>{heading[0]?.text}</strong>
					</h2>
					<div className='space20'></div>
					<div className='row'>
						<div className='col-lg-4'>
							<figure className='rounded'>
								<img data-src={image.url} alt={image.alt} className='lozad' />
							</figure>
						</div>

						<div className='space30 d-none d-md-block d-lg-none'></div>
						<div className='col-lg-4'>
							<h3 className='text-uppercase mb-20'>{about_title[0]?.text}</h3>
							<RichText render={about_details} linkResolver={linkResolver} />
						</div>

						<div className='space30 d-none d-md-block d-lg-none'></div>
						<div className='col-lg-4'>
							<h3 className='text-uppercase mb-20'>{list_title[0]?.text}</h3>
							{slice?.items?.map((item, index) => (
								<ListItem key={index} data={item} index={index} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const ListItem = ({ data, index }) => {
	const { title, details } = data;
	return (
		<div className='d-flex flex-row justify-content-lg-center'>
			<div>
				<div className='icon fs-30 font-title icon-bg icon-bg-s bg-pastel-yellow color-yellow mr-25'>
					<span className='number'>{index + 1}</span>
				</div>
			</div>
			<div>
				<h4 className='text-uppercase'>{title[0]?.text}</h4>
				<RichText render={details} linkResolver={linkResolver} />
			</div>
		</div>
	);
};

export default AboutSection;
