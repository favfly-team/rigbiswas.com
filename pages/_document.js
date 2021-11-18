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

					{/* SCRIPTS */}
					<script
						async
						defer
						src='https://static.cdn.prismic.io/prismic.js?new=true&repo=rigbiswas'></script>
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
