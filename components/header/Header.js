/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  Fa500Px,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Header = () => {
  const router = useRouter();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div>
      <nav className="navbar fixed wide bg-color navbar-expand-lg banner--clone banner--stick">
        <div className="container-fluid flex-row justify-content-center">
          <div className="navbar-header">
            <div className="navbar-brand">
              <Link href="/">
                <a>
                  <img
                    // src="https://images.prismic.io/rigbiswas/e2aa4884-3d12-4ad6-a039-7c252cac6c0d_rig-photography-logo.png?auto=compress,format"
                    src="https://images.prismic.io/rigbiswas/d2bf3013-c72b-4c0f-a75b-39fe952c79af_logo-white.png?auto=compress,format&w=80"
                    alt="Rig Photography Logo"
                  />
                </a>
              </Link>
            </div>
            <div className="navbar-hamburger ml-auto d-lg-none d-xl-none">
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className={`hamburger animate ${
                  showMobileMenu ? "active" : ""
                }`}
                data-toggle="collapse"
                data-target=".navbar-collapse">
                <span></span>
              </button>
            </div>
          </div>

          <div
            onClick={() => setShowMobileMenu(false)}
            className={`justify-content-between align-items-center ${
              showMobileMenu ? "" : "navbar-collapse collapse"
            }`}>
            <ul className="navbar-nav plain mx-auto text-center">
              <LinkItem text="Home" link="/" active={router.pathname == "/"} />
              <LinkItem
                text="Moments"
                link="/moments"
                active={router.pathname == "/moments"}
              />
              <LinkItem
                text="Weddings"
                link="/wedding-portfolio"
                active={router.pathname == "/wedding-portfolio"}
              />
              <LinkItem
                text="Kids Zone"
                link="/kids-portfolio"
                active={router.pathname == "/kids-portfolio"}
              />
              <LinkItem
                text="Films"
                link="/films"
                active={
                  router.pathname == "/films" ||
                  router.pathname == "/films/[slug]"
                }
              />
              <LinkItem
                text="Albums"
                link="/albums"
                active={router.pathname == "/albums"}
              />
              <LinkItem
                text="Services"
                link="/photography-services"
                active={
                  router.pathname == "/photography-services" ||
                  router.pathname == "/[slug]"
                }
              />
              <LinkItem
                text="About Us"
                link="/about-rig"
                active={router.pathname == "/about-rig"}
              />
              <LinkItem
                text="Book Us"
                link="/contact"
                active={router.pathname == "/contact"}
              />
              <LinkItem
                text="Reviews"
                link="/client-reviews"
                active={router.pathname == "/client-reviews"}
              />
              <LinkItem
                text="Blog"
                link="/photography-blog"
                active={
                  router.asPath.includes("/blog") ||
                  router.pathname == "/photography-blog"
                }
              />
              <LinkItem
                text="Join Us"
                link="/join-us"
                active={router.pathname == "/join-us"}
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
          <div className="social-wrapper text-right">
            <ul className="social social-mute social-s mb-0">
              <li>
                <a href="https://www.facebook.com/rigphotography/">
                  <i className="fa">
                    <FaFacebookF />
                  </i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/rig_photography/">
                  <i className="fa">
                    <FaTwitter />
                  </i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCd-ndiH2K7fRrQq9THQd-Tw">
                  <i className="fa">
                    <FaYoutube />
                  </i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/rig_photography/">
                  <i className="fa">
                    <RiInstagramFill />
                  </i>
                </a>
              </li>
              <li>
                <a href="https://in.pinterest.com/rigphotography/">
                  <i className="fa">
                    <FaPinterest />
                  </i>
                </a>
              </li>
              <li>
                <a href="https://500px.com/rig_photography6">
                  <i className="fa">
                    <Fa500Px />
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <style jsx>{`
        .bg-color {
          background: radial-gradient(
            circle,
            rgba(57, 30, 107, 1) 0%,
            rgba(30, 14, 66, 1) 100%
          );
        }
        @media (min-width: 992px) {
          .navbar.fixed .navbar-brand img {
            height: 70px !important;
            padding: 10px 0;
          }
        }
        .social-mute a i {
          color: #fff;
        }
        .hamburger:before,
        .hamburger span,
        .hamburger:after {
          background-color: #fff;
        }
        .navbar {
          border-bottom: 3px solid;
          border-color: #eca2ff;
          box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

const LinkItem = ({ text, link, active }) => {
  return (
    <li className="nav-item">
      <Link href={link}>
        <a
          className={`nav-link font-weight-normal text-center ${
            active ? "active" : ""
          } `}>
          <span className="position-relative">
            {text}
            {text == "Moments" && <div className="dot blinking"></div>}
          </span>
        </a>
      </Link>
      <style jsx>{`
        .dot {
          position: absolute;
          top: 2px;
          right: -8px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #ff00cc;
        }
        span {
          font-size: 17px;
        }
      `}</style>
    </li>
  );
};

export default Header;
