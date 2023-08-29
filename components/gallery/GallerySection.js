/* eslint-disable @next/next/no-img-element */

const GallerySection = ({ slice }) => {
  // console.log(slice);
  return (
    <section className="container-fluid px-3">
      <div className="row">
        {slice.items.map((item, index) => (
          <GalleryItem key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

const GalleryItem = ({ data }) => {
  const { image } = data;
  return (
    <div className="col-lg-4 p-0 mb-0">
      <div className="img-box position-relative">
        <div className="wrapper"></div>
        <img src={image.url} alt={image.alt} className="img-fluid" />
      </div>

      <style jsx>{`
        .img-box {
          cursor: pointer;
          //padding: 3px 3px 3px 3px;
        }
        .wrapper {
          transition: all 0.3s ease-in-out;
          opacity: 0;
        }
        .img-box:hover .wrapper {
          background: rgba(0, 0, 0, 0.5);
          opacity: 1;
          z-index: 9;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default GallerySection;
