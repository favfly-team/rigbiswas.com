import { FaMap, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";

const ContactInfoSection = ({ slice }) => {
  const { heading, description1, address, email, phone, map_link } =
    slice?.primary;

  return (
    <div className="container inner">
      <div className="boxed">
        <div className="bg-white shadow rounded">
          <div className="image-block-wrapper">
            {map_link?.url && (
              <div className="image-block col-lg-6 p-0">
                <div className="google-map map-full">
                  <iframe
                    src={map_link?.url}
                    width="100%"
                    height="100%"
                    allowFullScreen></iframe>
                </div>
              </div>
            )}

            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 offset-lg-6">
                  <div className="box d-flex">
                    <div className="align-self-center contact-info">
                      <h4 className="heading-text">{heading?.[0]?.text}</h4>
                      <RichText
                        render={description1}
                        linkResolver={linkResolver}
                      />
                      <ul className="icon-list mt-20">
                        <li className="d-flex align-items-center mb-6">
                          <FaMap className="mr-10" />
                          <RichText
                            render={address}
                            linkResolver={linkResolver}
                          />
                        </li>
                        <li className="d-flex align-items-center mb-6">
                          <FaEnvelope className="mr-10" />
                          <RichText
                            render={email}
                            linkResolver={linkResolver}
                          />
                        </li>
                        <li className="d-flex align-items-center mb-6">
                          <FaPhoneAlt className="mr-10" />
                          <RichText
                            render={phone}
                            linkResolver={linkResolver}
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .heading-text {
            font-size: 24px;
            margin-bottom: 5px;
          }
          @media (max-width: 991px) {
            .box {
              padding: 30px 15px !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default ContactInfoSection;
