/* eslint-disable @next/next/no-img-element */
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";
import { RiLeafFill } from "react-icons/ri";

const AboutSection = ({ slice }) => {
  // console.log(slice);
  const { heading, image, about_title, about_details, list_title } =
    slice?.primary;
  return (
    <section>
      <div className="wrapper">
        <div className="container inner">
          <h2 className="lead larger text-center mb-20">
            <strong className="font-weight-normal">{heading[0]?.text}</strong>
          </h2>
          <div className="space20"></div>
          <div className="row">
            <div className="col-lg-4">
              <figure>
                <img
                  data-src={image.url}
                  alt={image.alt}
                  className="lozad rounded"
                />
              </figure>
            </div>

            <div className="space30 d-none d-md-block d-lg-none"></div>
            <div className="col-lg-4">
              <h3 className="text-uppercase mb-20">{about_title[0]?.text}</h3>
              <div className="desc">
                <RichText render={about_details} linkResolver={linkResolver} />
              </div>
            </div>

            <div className="space30 d-none d-md-block d-lg-none"></div>
            <div className="col-lg-4">
              <h3 className="text-uppercase mb-20">{list_title[0]?.text}</h3>
              {slice?.items?.map((item, index) => (
                <ListItem key={index} data={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .lead {
          color: #1f0f43;
        }
        h3.text-uppercase {
          font-size: 24px;
          font-weight: 600;
        }
        .desc {
          font-size: 18px;
          line-height: 26px;
          color: #606060;
        }
      `}</style>
    </section>
  );
};

const ListItem = ({ data, index }) => {
  const { title, details } = data;
  return (
    <div className="d-flex flex-row justify-content-lg-center">
      <div>
        <div className="icon fs-30 font-title icon-bg icon-bg-s mr-25">
          <span className="number">
            <RiLeafFill />
          </span>
        </div>
      </div>
      <div>
        <h4 className="text-uppercase">{title[0]?.text}</h4>
        <div className="desc">
          <RichText render={details} linkResolver={linkResolver} />
        </div>
      </div>
      <style jsx>{`
        h4.text-uppercase {
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 5px;
        }
        .desc {
          font-size: 16px;
          line-height: 24px;
          color: #606060;
        }
        .icon {
          background-color: #ece8f9;
          color: #8763f5;
        }
      `}</style>
    </div>
  );
};

export default AboutSection;
