// import { useState } from "react";
import { RichText } from "prismic-reactjs";
// import Airtable from "airtable";

import { linkResolver } from "../../prismic-configuration";

// const base = new Airtable({
//   apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
// }).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

const ContactSection = ({ slice }) => {
  // console.log(slice);
  const { heading, contact_info } = slice.primary;

  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   date: "",
  //   type: "",
  //   location: "",
  //   message: "",
  // });
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [success, setSuccess] = useState(false);

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  //   setError(null);
  //   setSuccess(false);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   try {
  //     const data = await base("Bookings").create([
  //       {
  //         fields: {
  //           Name: formData.name,
  //           Email: formData.email,
  //           Phone: formData.phone,
  //           Date: formData.date,
  //           "Type of shoot": formData.type,
  //           Location: formData.location,
  //           Message: formData.message,

  //           Source: location.href,
  //           Status: "Todo",
  //         },
  //       },
  //     ]);

  //     // console.log(data);

  //     setFormData({
  //       name: "",
  //       email: "",
  //       phone: "",
  //       date: "",
  //       type: "",
  //       location: "",
  //       message: "",
  //     });
  //     setSuccess(true);
  //     setLoading(false);
  //   } catch (error) {
  //     setError(error);
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="wrapper light-wrapper">
      <div className="container inner pt-60">
        <div className="space50"></div>
        <div className="row">
          <div className="col-md-8">
            <h2 className="section-title section-title-upper larger">
              LOOKING TO CAPTURE A MEMORY WITH US?
            </h2>

            {/* <div className="space10"></div> */}
            <div className="form-container">
              <iframe
                loading="lazy"
                className="booking-form"
                style={{ border: "none", width: "100%" }}
                id="rp-website-booking-qzscuv"
                src="https://opnform.com/forms/rp-website-booking-qzscuv"
              />

              <style jsx>{`
                .booking-form {
                  height: 470px;
                }
              `}</style>

              {/* <form onSubmit={handleSubmit} className="vanilla vanilla-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Your name"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Your e-mail"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Phone no."
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Main Shoot Date"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="custom-select"
                        required
                      >
                        <option defaultValue value="">
                          Type of Shoot
                        </option>
                        <option>Pre Wedding</option>
                        <option>Wedding</option>
                        <option>Baby Photography</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Shoot Location"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control"
                      rows="3"
                      placeholder="If there are any details you want us to know, please share! "
                      required
                    ></textarea>
                    <div className="space20"></div>
                    <button type="submit" className="btn">
                      {loading ? "Sending..." : "Submit"}
                    </button>
                    <footer
                      className={`notification-box mb-50 ${
                        success ? "show-success" : error ? "show-error" : ""
                      }`}
                    >
                      {error && (
                        <div className="col-lg-12 col-md-12 col-sm-12 mb-4">
                          <p className="text-danger text-center h2">
                            {error.message}
                          </p>
                        </div>
                      )}
                      {success && (
                        <div className="col-lg-12 col-md-12 col-sm-12 mb-4">
                          <p className="text-success text-center h2">
                            Thanks, we will contact you soon.
                          </p>
                        </div>
                      )}
                    </footer>
                  </div>
                </div>
              </form> */}
            </div>
          </div>

          <aside className="col-md-4 sidebar">
            <div className="box bg-white shadow p-30">
              <h4>{heading[0]?.text}</h4>
              <RichText render={contact_info} linkResolver={linkResolver} />
            </div>
          </aside>
        </div>
        <div className="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14721.1006269285!2d88.472059!3d22.718012!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2f4b5797943cd8f4!2sRig%20Photography!5e0!3m2!1sen!2sin!4v1636610886410!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
