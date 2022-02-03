import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang='en'>
				<Head>
					{/* ===== CSS FILES ===== */}
					<link
						rel='stylesheet'
						href='https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css'
					/>

					{/* ===== FONT ===== */}
					{/* <link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
					<link
						href='https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;600&display=swap'
						rel='stylesheet'
					/> */}
					{/* <link
						href='http://fonts.cdnfonts.com/css/louis-george-cafe'
						rel='stylesheet'
					/> */}

					{/* ===== PREFETCH ===== */}
					<link rel='preconnect' href='https://images.prismic.io/' />
					<link rel='dns-prefetch' href='https://images.prismic.io/' />

					{/* FAVICONS */}
					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href='/apple-touch-icon.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='32x32'
						href='/favicon-32x32.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='16x16'
						href='/favicon-16x16.png'
					/>
					<link rel='manifest' href='/site.webmanifest' />
					<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#f5c463' />
					<meta name='msapplication-TileColor' content='#ffc40d' />
					<meta name='theme-color' content='#f5c463' />
					<meta
						name='facebook-domain-verification'
						content='g2p1x2fcc1yclyfxb4dkgevifaa3jx'
					/>

					{/* SCRIPTS */}
					<script
						async
						defer
						src='https://static.cdn.prismic.io/prismic.js?new=true&repo=rigbiswas'></script>
					<script
						defer
						data-domain='rigbiswas.com'
						src='https://plausible.io/js/plausible.js'></script>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
