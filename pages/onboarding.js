import { useEffect, useState } from "react";

const OnboardingPage = () => {
  const [uid, setUid] = useState("");

  useEffect(() => {
    setUid(new Date().getTime());
  }, []);

  return (
    <>
      <div className="container">
        <div className="col-lg-6 mx-auto">
          <iframe
            style={{ border: "none", width: "100%" }}
            id="rp-webapp-onboarding-gritia"
            src={`https://opnform.com/forms/rp-webapp-onboarding-gritia?206e53ea-115e-46be-b159-72de0bab1722=${uid}`}
          />
        </div>
      </div>

      <style jsx>{`
        iframe {
          margin-top: 100px;
          height: 1100px;
        }
      `}</style>
    </>
  );
};

export default OnboardingPage;
