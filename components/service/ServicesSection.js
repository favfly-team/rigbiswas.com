import { HiArrowRight } from 'react-icons/hi';
import Link from 'next/link';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic-configuration';

const ServicesSection = ({ slice }) => {
	// console.log(slice);
	const { heading, description } = slice.primary;
	return (
		<div className='wrapper light-wrapper'>
			<div className='container inner'>
				<h2 className='section-title section-title-upper larger text-center'>
					{heading[0]?.text}
				</h2>
				<div className='lead larger text-center'>
					<RichText render={description} linkResolver={linkResolver} />
				</div>
				<div className='space30'></div>
				<div className='tiles'>
					<div className='row isotope grid boxed list-view'>
						{slice?.items?.map((item, index) => (
							<ServiceItem key={index} data={item} />
						))}
					</div>
				</div>

				<div className='space30'></div>
				{/* <div className='text-center'>
					<Link href='/photography-services'>
						<a className='btn btn-white'>See All Services</a>
					</Link>
				</div> */}
			</div>
		</div>
	);
};

const ServiceItem = ({ data }) => {
	const { title, details, image, link } = data;
	return (
		<div className='item grid-sizer col-lg-6'>
			<div className='bg-white rounded'>
				<div className='image-block-wrapper'>
					<div className='image-block col-lg-6'>
						<div
							className='image-block-bg bg-image'
							style={{
								backgroundImage: `url(${image?.url})`,
							}}
							data-image-src='style/images/art/fs1.jpg'></div>
					</div>

					<div className='container-fluid p-0'>
						<div className='row'>
							<div className='col-lg-6 offset-lg-6'>
								<div className='box service-item d-flex'>
									<div className='align-self-center'>
										<h3 className='mb-15 font-weight-normal'>
											<Link href={`/${link?.uid}`}>
												<a className='text-reset'>
													<strong className='font-weight-normal'>
														{title[0]?.text}
													</strong>
												</a>
											</Link>
										</h3>
										<RichText render={details} linkResolver={linkResolver} />
										<div className='arrow-link'>
											<Link href={`/${link?.uid}`}>
												<a className='text-muted'>
													View Our Works
													<i className=''>
														<HiArrowRight className='align-baseline' />
													</i>
												</a>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServicesSection;
