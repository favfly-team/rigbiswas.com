/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
	FaFacebookF,
	FaTwitter,
	FaYoutube,
	FaPinterest,
	Fa500Px,
} from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

const Header = () => {
	const router = useRouter();
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	return (
		<div>
			<nav className='navbar fixed wide bg-pastel-yellow navbar-expand-lg banner--clone banner--stick'>
				<div className='container-fluid flex-row justify-content-center'>
					<div className='navbar-header'>
						<div className='navbar-brand'>
							<Link href='/'>
								<a>
									<img
										src='https://images.prismic.io/rigbiswas/e2aa4884-3d12-4ad6-a039-7c252cac6c0d_rig-photography-logo.png?auto=compress,format'
										alt='Rig Photography Logo'
									/>
								</a>
							</Link>
						</div>
						<div className='navbar-hamburger ml-auto d-lg-none d-xl-none'>
							<button
								onClick={() => setShowMobileMenu(!showMobileMenu)}
								className={`hamburger animate ${
									showMobileMenu ? 'active' : ''
								}`}
								data-toggle='collapse'
								data-target='.navbar-collapse'>
								<span></span>
							</button>
						</div>
					</div>

					<div
						onClick={() => setShowMobileMenu(false)}
						className={`justify-content-between align-items-center ${
							showMobileMenu ? '' : 'navbar-collapse collapse'
						}`}>
						<ul className='navbar-nav plain mx-auto text-center'>
							<LinkItem text='Home' link='/' active={router.pathname == '/'} />
							<LinkItem
								text='Portfolio'
								link='/portfolio'
								active={router.asPath.includes('/portfolio')}
							/>
							<LinkItem
								text='Films'
								link='/films'
								active={router.pathname == '/films'}
							/>
							<LinkItem
								text='Services'
								link='/photography-services'
								active={router.pathname == '/photography-services'}
							/>
							<LinkItem
								text='About Us'
								link='/about-rig'
								active={router.pathname == '/about-rig'}
							/>
							<LinkItem
								text='Book Us'
								link='/contact'
								active={router.pathname == '/contact'}
							/>
							<LinkItem
								text='Reviews'
								link='/reviews'
								active={router.pathname == '/reviews'}
							/>
							<LinkItem
								text='Blog'
								link='/photography-blog'
								active={
									router.asPath.includes('/blog') ||
									router.pathname == '/photography-blog'
								}
							/>
							<LinkItem
								text='Carrer'
								link='/carrer'
								active={router.pathname == '/carrer'}
							/>
							{/* <li className='nav-item dropdown'>
								<a className='nav-link dropdown-toggle' href='#'>
									Contact
								</a>
								<ul className='dropdown-menu d-block'>
									<li className='nav-item'>
										<a className='dropdown-item' href='contact.html'>
											Contact I
										</a>
									</li>
									<li className='nav-item'>
										<a className='dropdown-item' href='contact2.html'>
											Contact II
										</a>
									</li>
									<li className='nav-item'>
										<a className='dropdown-item' href='contact3.html'>
											Contact III
										</a>
									</li>
								</ul>
							</li> */}
						</ul>
					</div>
					<div className='social-wrapper text-right'>
						<ul className='social social-mute social-s mb-0'>
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
			</nav>
		</div>
	);
};

const LinkItem = ({ text, link, active }) => {
	return (
		<li className='nav-item'>
			<Link href={link}>
				<a
					className={`nav-link font-weight-normal text-center ${
						active ? 'active' : ''
					} `}>
					{text}
				</a>
			</Link>
		</li>
	);
};

export default Header;
