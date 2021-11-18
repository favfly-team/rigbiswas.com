/* eslint-disable @next/next/no-img-element */
import { FaPlay } from 'react-icons/fa';

const FilmsSection = ({ slice }) => {
	// console.log(slice);
	return (
		<section className='wrapper light-wrapper'>
			<div className='container-fluid inner'>
				<div className='tiles text-center'>
					<div className='items row'>
						{slice?.items?.map((item, index) => (
							<PortfolioItem key={index} data={item} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

const PortfolioItem = ({ data }) => {
	const { image } = data;
	return (
		<div className='item col-md-6 col-lg-4'>
			<figure className='overlay overlay1 rounded'>
				<img data-src={image.url} alt={image.alt} className='lozad' />
				<button className=' play-btn position-absolute'>
					<i className='text-white'>
						<FaPlay />
					</i>
				</button>
			</figure>

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
		</div>
	);
};

export default FilmsSection;
