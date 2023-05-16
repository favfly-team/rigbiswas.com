import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";

const AboutHeroSection = ({ slice }) => {
  const { heading, description, image } = slice.primary;

  return (
    <>
      <section>
        <div
          className="bg"
          style={{
            backgroundImage: `url(${image?.url})`,
          }}></div>

        <div className="wrapper">
          <div className="container inner pt-40 pb-40">
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
        .bg {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          height: 50vh;
          width: 100%;
          margin-top: 60px;
        }
        .heading {
          margin-bottom: 10px;
        }
        .heading h1 {
          font-size: 26px;
          line-height: 34px;
          margin-bottom: 0;
        }
        .sub-heading2 {
          font-size: 20px;
          line-height: 28px;
        }
        .wrapper {
          background: #f0f8ff;
        }
      `}</style>
    </>
  );
};

export default AboutHeroSection;
