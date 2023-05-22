/* eslint-disable react/no-unescaped-entities */
import { RichText } from "prismic-reactjs";

const HeroSection = ({ slice }) => {
  // console.log(slice);
  const { heading, background_image } = slice?.primary;
  return (
    <section className="hero position-relative">
      <div className="wrapper bg-image inverse-text sliding-background bg-dark"></div>

      <div className="heading">
        <RichText render={heading} />
      </div>

      <style jsx>{`
        .hero {
          max-width: 100vw;
          overflow: hidden;
        }
        .wrapper {
          margin-top: 58px;
          min-height: 60vh;
        }

        .sliding-background {
          width: 20304px;
          animation: slide 120s linear infinite;
          background: url(${background_image.url}) repeat-x;
          background-size: contain;
        }
        @keyframes slide {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-6000px, 0, 0);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
