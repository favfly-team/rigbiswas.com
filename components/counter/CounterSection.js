/* eslint-disable @next/next/no-img-element */
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const CounterSection = ({ slice }) => {
  // console.log(slice);
  return (
    <section className="wrapper gray-wrapper overflow-hidden">
      <div className="container-fluid inner">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="d-flex counter justify-content-center flex-wrap">
              {slice?.items?.map((item, index) => (
                <CounterItem key={index} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CounterItem = ({ data }) => {
  const { title, number, icon } = data;
  return (
    <>
      <div className="box bg-white shadow rounded mb-20 mx-2">
        <div className="d-flex flex-row justify-content-center">
          <div className="icon fs-58 icon-color color-lavender mr-25">
            <img
              data-src={icon?.url}
              alt={icon?.alt}
              height="60"
              className="lozad mt-10"
            />
          </div>
          <div>
            <h3 className="value">
              <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
                {({ isVisible }) => (
                  <div style={{ height: 40 }}>
                    {isVisible ? (
                      <CountUp
                        start={0}
                        end={parseInt(number[0]?.text, 10)}
                        duration={3}
                      />
                    ) : null}
                    +
                  </div>
                )}
              </VisibilitySensor>
            </h3>
            <p>{title[0]?.text}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .box {
          width: 280px;
        }
      `}</style>
    </>
  );
};

export default CounterSection;
