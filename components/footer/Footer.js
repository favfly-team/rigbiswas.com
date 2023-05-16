/* eslint-disable @next/next/no-img-element */
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  Fa500Px,
  FaHeart,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="dark-wrapper inverse-text">
      <div className="container inner">
        <div className="row d-md-flex align-items-md-center">
          <div className="col-md-4 text-center text-md-left">
            <p className="mb-0">
              © {new Date().getFullYear()} Rig Photography. All rights reserved.
            </p>
          </div>

          <div className="col-md-4 text-center">
            {/* <img
              src="https://images.prismic.io/rigbiswas/f0a7dc4e-1e1e-48ed-a30b-14097989d889_rig-photography-logo.png"
              alt="Rig Photography Logo"
            /> */}
            <img
              src="https://images.prismic.io/rigbiswas/d2bf3013-c72b-4c0f-a75b-39fe952c79af_logo-white.png?auto=compress,format&w=150"
              alt="Rig Photography Logo"
            />
          </div>

          <div className="col-md-4 text-center text-md-right">
            <ul className="social social-mute social-s mt-10">
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
      </div>

      {/* ========== FAVFLY ========= */}
      <div className="divider-icon">
        <i className="fa">
          <FaHeart />
        </i>
      </div>
      <a
        title="Best digital marketing company in kolkata"
        href="https://favfly.com?ref=rigbiswas.com"
        className="text-center py-3 font-weight-bold white d-block letterspace-1">
        Growing with Favfly
      </a>

      <style jsx>{`
        .divider-icon {
          color: #fa2b57;
        }
        .divider-icon i {
          color: #ff00cc;
        }
        .dark-wrapper {
          background: radial-gradient(
            circle,
            rgb(46 23 88) 0%,
            rgb(22 9 52) 100%
          );
        }
        a:hover {
          color: #ff00cc !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;

// radial-gradient(
//   circle,
//   rgba(57, 30, 107, 1) 0%,
//   rgba(30, 14, 66, 1) 100%
// );
