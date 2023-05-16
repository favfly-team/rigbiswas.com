import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";

const SecondaryHeroSection = ({ slice }) => {
  // console.log(slice);
  const { heading, description, image } = slice.primary;
  return (
    <>
      <section>
        <div
          className={`wrapper ${
            image?.url ? "backgroundImage" : "bg-pastel-yellow"
          }`}>
          <div className="container inner pt-140">
            <div className="row">
              <div className="col-md-10 mx-auto px-2 text-center">
                <div className="heading">
                  <h1>{heading[0]?.text}</h1>
                </div>
                <div className="space10"></div>
                <div className="sub-heading2">
                  <RichText render={description} linkResolver={linkResolver} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .backgroundImage {
          background-image: url(${image?.url});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .wrapper {
          height: 50vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .backgroundImage:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
        }
        .backgroundImage .heading h1,
        .backgroundImage .sub-heading2 {
          color: #fff;
        }

        .heading h1 {
          font-size: 34px;
        }
        .sub-heading2 {
          font-size: 24px;
          line-height: 34px;
        }
        @media only screen and (max-width: 576px) {
          .heading h1 {
            font-size: 30px;
          }
          .sub-heading2 {
            font-size: 20px;
            line-height: 1.4;
          }
        }
      `}</style>
    </>
  );
};

export default SecondaryHeroSection;
