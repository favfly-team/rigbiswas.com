/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { FaPlay } from 'react-icons/fa';
import Link from 'next/link';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic-configuration';

const FeaturedFilmSection = ({ slice }) => {
	// console.log(slice);
	const { image, heading, description, video_link, button_text, button_link } =
		slice?.primary;

	const [sources, setSources] = useState([]);
	const [toggler, setToggler] = useState(false);

	useEffect(() => {
		let tempSources = [video_link?.url];

		setSources(tempSources);
		return () => {
			setSources([]);
		};
	}, [video_link]);

	return (
		<section>
			<div className='wrapper bg-pastel-yellow'>
				<div className='container inner'>
					<div className='row d-flex align-items-center'>
						<div className='col-lg-8 pr-35 pr-sm-15 position-relative'>
							<img
								data-src={image.url}
								alt={image.alt}
								className='img-fluid rounded w-100 lozad'
							/>
							<button
								onClick={() => setToggler(!toggler)}
								className=' play-btn position-absolute'>
								<i className='text-white'>
									<FaPlay />
								</i>
							</button>
						</div>

						<div className='space30 d-none d-md-block d-lg-none'></div>
						<div className='col-lg-4'>
							<h2 className='section-title section-title-upper larger'>
								{heading[0]?.text}
							</h2>
							<RichText render={description} linkResolver={linkResolver} />
							<div className='space10'></div>
							<Link href={button_link[0]?.text}>
								<a className='btn btn-white shadow mb-0'>
									{button_text[0]?.text}
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				.play-btn {
					transform: translate(-50%, -50%);
					top: 50%;
					left: 50%;
					background: rgb(245 196 99 / 65%);
					border: 0;
					padding: 22px 50px;
					font-size: 2rem;
				}
				.play-btn:hover {
					background: rgb(245 196 99);
				}
			`}</style>

			<FsLightbox
				toggler={toggler}
				sources={sources}
				disableLocalStorage={true}
				// slide={lightboxController.slide}
			/>
		</section>
	);
};

export default FeaturedFilmSection;
