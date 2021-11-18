import Header from '../header/Header';
import Footer from '../footer/Footer';
// import WhatsappButton from '../WhatsappButton';
// import PhoneButton from '../PhoneButton';
// import LinksCollection from '../collection/LinksCollection';

const DefaultLayout = ({ children }) => {
	return (
		<main className='main-content'>
			<Header />
			<div className='main'>{children}</div>
			{/* <LinksCollection /> */}
			<Footer />
			{/* <WhatsappButton
				number='+917872644844'
				text='Hi,%20Bong%20Wedding%20Photography'
			/> */}
			{/* <PhoneButton number='+917872644844' /> */}
		</main>
	);
};

export default DefaultLayout;
