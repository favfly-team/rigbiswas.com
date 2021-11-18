import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic-configuration';

const DetailsSection = ({ slice }) => {
	// console.log(slice);
	return (
		<section className='wrapper gray-wrapper'>
			<div className='container inner details-box'>
				<RichText render={slice.primary.details} linkResolver={linkResolver} />
			</div>
		</section>
	);
};

export default DetailsSection;
