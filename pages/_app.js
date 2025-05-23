import Router from "next/router";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Script from "next/script";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import "../styles/plugins.css";
import "../styles/style.css";
import "../styles/custom.css";

import { DefaultSeo } from "next-seo";
import DefaultLayout from "../components/layouts/default";

import Modal from "../components/modal/Modal";
import QueryModalForm from "../components/modal/QueryModalForm";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout;
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);

  let timeoutId;

  const setTimer = () => {
    // Calculate expiration time
    const expirationTime = new Date().getTime() + 30 * 60 * 1000;

    // Store expiration time in LocalStorage
    localStorage.setItem("timerExpiration", expirationTime);
  };

  // Check if the timer has expired
  const isTimerExpired = () => {
    // Retrieve the expiration time from LocalStorage
    const expirationTime = localStorage.getItem("timerExpiration");

    // Compare the current timestamp with the expiration time
    const currentTime = new Date().getTime();
    return currentTime > expirationTime;
  };

  //Binding events.
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
    clearTimeout(timeoutId);
  });
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    if (router.pathname === "/onboarding") {
      return;
    }

    if (isTimerExpired()) {
      timeoutId = setTimeout(() => {
        setShowModal(true);
      }, 1000 * 15);
    }

    // console.log(router);
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.get("utm_source") == "google-ads") {
      setTimeout(() => {
        setIsModal(true);
      }, 8000);
    }
  }, [router]);
  return (
    <>
      <DefaultSeo
        defaultTitle="Rig Biswas Award Winning Best Wedding Photographer in Kolkata"
        openGraph={{
          type: "website",
          locale: "en_IN",
          url: "https://rigbiswas.com/",
          site_name: "rigbiswas",
        }}
        twitter={{
          handle: "@rig_photography",
          site: "@rig_photography",
          cardType: "summary_large_image",
        }}
      />
      {isModal && <Modal setIsModal={setIsModal} />}
      <Layout>
        <Component {...pageProps} />
        <QueryModalForm
          showModal={showModal}
          setShowModal={setShowModal}
          setTimer={setTimer}
        />
      </Layout>

      {/* ===== Google Tag Manager ===== */}
      <Script strategy="lazyOnload">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5BCK8QC9');
        `}
      </Script>

      <Script strategy="lazyOnload">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1847593022746412');
          fbq('track', 'PageView');        
        `}
      </Script>
    </>
  );
}

export default MyApp;
