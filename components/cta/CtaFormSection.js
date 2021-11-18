import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic-configuration';

const CtaFormSection = ({ slice }) => {
	// console.log(slice);
	const { heading, description, background_image } = slice.primary;
	return (
		<section className='wrapper image-wrapper bg-image inverse-text'>
			<div className='container inner pt-80 pb-80 text-center'>
				<div className='row'>
					<div className='col-lg-10 offset-lg-1 col-xl-8 offset-xl-2'>
						<h2 className='section-title section-title-upper larger text-center'>
							{heading[0]?.text}
						</h2>
						<div className='lead text-center'>
							<RichText render={description} linkResolver={linkResolver} />
						</div>
						<div className='space20'></div>
						<form className='form-inline justify-content-center'>
							<input
								type='text'
								className='form-control mb-20 mb-md-0 mr-sm-2 border'
								id='inlineFormName'
								placeholder='Full Name'
							/>
							<input
								type='email'
								className='form-control mb-20 mb-md-0 mr-sm-2 border'
								id='inlineFormEmail'
								placeholder='Phone Number'
							/>
							<button
								type='submit'
								className='btn btn-white shadow mb-20 mb-md-0 ml-2 ml-md-0'>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>

			<style jsx>{`
				.wrapper {
					background-image: url(${background_image.url});
				}
			`}</style>
		</section>
	);
};

export default CtaFormSection;
