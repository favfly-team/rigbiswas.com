/* eslint-disable @next/next/no-img-element */
import {
	FaFacebookF,
	FaTwitter,
	FaYoutube,
	FaPinterest,
	Fa500Px,
} from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
	return (
		<footer className='dark-wrapper inverse-text'>
			<div className='container inner'>
				<div className='row d-md-flex align-items-md-center'>
					<div className='col-md-4 text-center text-md-left'>
						<p className='mb-0'>© 2021 Rig Photography. All rights reserved.</p>
					</div>

					<div className='col-md-4 text-center'>
						<img
							src='https://images.prismic.io/rigbiswas/f0a7dc4e-1e1e-48ed-a30b-14097989d889_rig-photography-logo.png'
							alt='Rig Photography Logo'
						/>
					</div>

					<div className='col-md-4 text-center text-md-right'>
						<ul className='social social-mute social-s mt-10'>
							<li>
								<a href='https://www.facebook.com/rigphotography/'>
									<i className='fa'>
										<FaFacebookF />
									</i>
								</a>
							</li>
							<li>
								<a href='https://twitter.com/rig_photography/'>
									<i className='fa'>
										<FaTwitter />
									</i>
								</a>
							</li>
							<li>
								<a href='https://www.youtube.com/channel/UCd-ndiH2K7fRrQq9THQd-Tw'>
									<i className='fa'>
										<FaYoutube />
									</i>
								</a>
							</li>
							<li>
								<a href='https://www.instagram.com/rig_photography/'>
									<i className='fa'>
										<RiInstagramFill />
									</i>
								</a>
							</li>
							<li>
								<a href='https://in.pinterest.com/rigphotography/'>
									<i className='fa'>
										<FaPinterest />
									</i>
								</a>
							</li>
							<li>
								<a href='https://500px.com/rig_photography6'>
									<i className='fa'>
										<Fa500Px />
									</i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
