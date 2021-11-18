import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import '../styles/plugins.css';
import '../styles/style.css';

import { DefaultSeo } from 'next-seo';
import DefaultLayout from '../components/layouts/default';

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
	const Layout = Component.Layout || DefaultLayout;
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
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
