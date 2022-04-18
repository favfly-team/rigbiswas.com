import Router from 'next/router';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import '../styles/plugins.css';
import '../styles/style.css';

import { DefaultSeo } from 'next-seo';
import DefaultLayout from '../components/layouts/default';

import Modal from '../components/modal/Modal';

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
	const Layout = Component.Layout || DefaultLayout;
	const router = useRouter();

	const [isModal, setIsModal] = useState(false);

	useEffect(() => {
		// console.log(router);
		const queryParams = new URLSearchParams(window.location.search);
		if (queryParams.get('utm_source') == 'google-ads') {
			setTimeout(() => {
				setIsModal(true);
			}, 8000);
		}
	}, [router]);
	return (
		<>
			<DefaultSeo
				defaultTitle='Rig Biswas Award Winning Best Wedding Photographer in Kolkata'
				openGraph={{
					type: 'website',
					locale: 'en_IN',
					url: 'https://rigbiswas.com/',
					site_name: 'rigbiswas',
				}}
				twitter={{
					handle: '@rig_photography',
					site: '@rig_photography',
					cardType: 'summary_large_image',
				}}
			/>
			{isModal && <Modal setIsModal={setIsModal} />}
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
