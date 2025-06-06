// import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useState, useEffect } from "react";

const QueryModalForm = ({ showModal, setShowModal, setTimer }) => {
  const imgs = [
    "https://images.prismic.io/rigbiswas/dfc23e09-3d66-4441-8358-30fd54cbd5d3_img+5.jpg",
    "https://images.prismic.io/rigbiswas/76f8d0d7-6227-4b44-a118-13c57b469a94_img+2.jpg",
    "https://images.prismic.io/rigbiswas/7985442c-6ced-4dfd-8977-98bd513c57ec_img+6.jpg",
    "https://images.prismic.io/rigbiswas/963e065d-9ca8-49e0-8228-c1e156fd9492_img+3.jpg",
    "https://images.prismic.io/rigbiswas/07e823ab-050c-4fd9-85e6-50399d91522d_img+4.jpg",
    "https://images.prismic.io/rigbiswas/b1525ad9-e547-4f09-8e31-68f7d2792c5c_img+1.jpg",
  ];

  const [source, setSource] = useState(null);

  useEffect(() => {
    setSource(location.href);
  }, []);

  return (
    <div className={`modal fade blur ${showModal ? "show d-block" : ""}`}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <Splide
            options={{
              type: "fade",
              perPage: 1,
              perMove: 1,
              autoplay: true,
              pauseOnHover: false,
              pauseOnFocus: false,
              interval: 2000,
              speed: 1000,
              arrows: false,
              pagination: false,
              rewind: true,
            }}
          >
            {imgs.map((img, index) => (
              <SplideSlide key={index}>
                <img
                  className="w-100"
                  src={`${img}?auto=compress,format&rect=0,0,3078,2047&w=800&h=532`}
                  alt="wedding planner"
                />
              </SplideSlide>
            ))}
          </Splide>

          <button
            onClick={() => {
              setShowModal(false);
              setTimer();
            }}
            type="button"
            className="close text-white"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div className="modal-body">
            {/* <div className="section-title text-center mb-10">
              <h3 className="mb-20 gradient-text">
                Capture Your Dream Moments
              </h3>
            </div> */}
            {/* <div className="form-container" style={{ marginTop: "10px" }}>
              <form onSubmit={handleSubmit} className="vanilla vanilla-form">
                <div className="row text-center">
                  <div className="col-md-6 pr-5">
                    <div className="form-group custom-date-picker">
                      <DatePicker
                        selected={formData.eventDate}
                        required
                        onChange={(date) => {
                          setFormData({
                            ...formData,
                            eventDate: date,
                          });
                        }}
                        placeholderText="Event Date*"
                        className="w-100"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 pl-5">
                    <div className="form-group custom-date-picker">
                      <select
                        name="eventType"
                        className="w-100"
                        value={formData.eventType}
                        onChange={handleChange}
                        required>
                        <option>Select Event Type*</option>
                        <option>Wedding</option>
                        <option>Pre wedding</option>
                        <option>Baby & Maternity</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 pr-5">
                    <div className="form-group">
                      <input
                        type="text"
                        name="location"
                        className="w-100"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Your Location*"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 pl-5">
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone"
                        className="w-100"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your WhatsApp No.*"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 pr-5">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="w-100"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name*"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 pl-5">
                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        className="w-100"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn mb-5">
                      {loading
                        ? "Please Wait..."
                        : "Get Package Details on Whatsapp"}
                    </button>
                  </div>
                </div>
                {error && (
                  <div className="col-lg-12 col-md-12 col-sm-12 text-danger text-center">
                    <p className="mb-0 mt-3">{error.message}</p>
                  </div>
                )}
                {success && (
                  <div className="col-lg-12 col-md-12 col-sm-12 text-success text-center">
                    <p className="mb-0 mt-3">
                      Thanks, we will contact you soon.
                    </p>
                  </div>
                )}
              </form>
            </div> */}

            <iframe
              loading="lazy"
              className="form"
              style={{ border: "none", width: "100%" }}
              id="rp-website-booking-sk401a"
              src={`https://opnform.com/forms/rp-website-booking-sk401a?d7a7d33a-6206-4789-a757-6534371244f0=${source}`}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .form {
          height: 200px;
          margin-top: 15px;
        }
        img {
          height: 300px;
          object-fit: cover;
        }
        button {
          padding: 14px 16px;
          font-size: 14px !important;
        }
        @media (max-width: 375px) {
          img {
            height: 200px;
          }
        }
        @media (min-width: 576px) {
          .modal-dialog {
            max-width: 700px;
          }
        }
        .gradient-text {
          background: linear-gradient(
            to right,
            rgba(98, 155, 225, 1) 25%,
            rgba(148, 106, 221, 1) 50%,
            rgba(179, 107, 213, 1) 75%,
            rgba(226, 44, 80, 1) 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-fill-color: transparent;
          background-size: 500% auto;
          // animation: textShine 3s ease-in-out infinite alternate;

          font-family: "SfProDisplayBold";
          font-size: 38px;
          line-height: 40px;
        }

        .blur {
          //  backdrop-filter: blur(8px);
          background-color: rgb(0 0 0 / 80%);
        }
        .modal-body {
          padding: 10px 20px;
        }
        .modal-content {
          border-radius: 10px;
          overflow: hidden;
        }
        .section-title h4 {
          font-size: 1.2rem;
        }
        .close {
          position: absolute;
          top: -10px;
          right: -5px;
          z-index: 1;
          opacity: 0.6;
          font-size: 30px !important;
        }
        .form-group {
          margin-bottom: 10px;
        }
        .close:not(:disabled):not(.disabled):focus,
        .close:not(:disabled):not(.disabled):hover {
          outline: none;
        }
        @media (max-width: 767px) {
          .pl-5 {
            padding-left: 15px !important;
          }
          .pr-5 {
            padding-right: 15px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default QueryModalForm;
