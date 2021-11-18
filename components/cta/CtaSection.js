/* eslint-disable react/no-unescaped-entities */
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic-configuration';

const CtaSection = ({ slice }) => {
	const { background_image, heading } = slice.primary;

	return (
		<div
			className='wrapper image-wrapper bg-image inverse-text'
			style={{
				backgroundImage: `url(${background_image?.url})`,
			}}>
			<div className='container inner pt-100 pb-100'>
				<div className='row'>
					<div className='col-md-10 offset-md-1'>
						<div className='sub-heading text-center mb-0'>
							<RichText render={heading} linkResolver={linkResolver} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CtaSection;
