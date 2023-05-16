/* eslint-disable react/no-unescaped-entities */

const HeroSection = ({ slice }) => {
  // console.log(slice);
  const { heading, background_image } = slice?.primary;
  return (
    <section className="hero position-relative">
      <div className="wrapper bg-image inverse-text sliding-background bg-dark"></div>

      <h1 className="heading">{heading[0]?.text}</h1>

      <style jsx>{`
        .hero {
          max-width: 100vw;
          overflow: hidden;
        }
        .wrapper {
          margin-top: 58px;
          min-height: 60vh;
        }
        h1 {
          position: absolute;
          color: #fff;
          width: 100%;
          max-width: 800px;
          transform: translate(-50%, -50%);
          left: 50%;
          top: 50%;
          text-align: center;
          font-family: "SfProDisplayMedium";
          font-weight: 400;
        }
        .sliding-background {
          width: 5076px;
          animation: slide 40s linear infinite;
          background: url(${background_image.url}) repeat-x;
          //background: url(https://images.prismic.io/rigbiswas/3e7134d8-45ce-4bcb-9794-42c9828ffe80_Hero+Section+Collage+coedpy.jpg?auto=compress,format)
            repeat-x;
          background-size: contain;
        }
        @keyframes slide {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-2000px, 0, 0);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
