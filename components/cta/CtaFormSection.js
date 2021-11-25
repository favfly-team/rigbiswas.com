import { useState } from 'react';
import { RichText } from 'prismic-reactjs';
import Airtable from 'airtable';
import { linkResolver } from '../../prismic-configuration';

const base = new Airtable({
	apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

const CtaFormSection = ({ slice }) => {
	// console.log(slice);
	const { heading, description, background_image } = slice.primary;

	const [formData, setFormData] = useState({
		type: '',
		date: '',
		phone: '',
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
		setError(null);
		setSuccess(false);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const data = await base('Queries').create([
				{
					fields: {
						'Type of shoot': formData.type,
						Date: formData.date,
						Phone: formData.phone,

						Source: location.href,
						Status: 'Todo',
					},
				},
			]);

			// console.log(data);

			setFormData({
				type: '',
				date: '',
				phone: '',
			});
			setSuccess(true);
			setLoading(false);
		} catch (error) {
			setError(error);
			console.log(error);
			setLoading(false);
		}
	};

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
						<form
							onSubmit={handleSubmit}
							className='form-inline justify-content-center'>
							<select
								name='type'
								value={formData.type}
								onChange={handleChange}
								className='custom-select form-control mb-20 mb-md-0 mr-sm-2 border text-white'
								required>
								<option defaultValue value=''>
									Type of shoot
								</option>
								<option>Pre Wedding</option>
								<option>Wedding</option>
								<option>Baby Photography</option>
							</select>
							<input
								name='date'
								value={formData.date}
								onChange={handleChange}
								type='date'
								className='form-control mb-20 mb-md-0 mr-sm-2 border'
								placeholder='Select date'
								required
							/>
							<input
								name='phone'
								value={formData.phone}
								onChange={handleChange}
								type='tel'
								className='form-control mb-20 mb-md-0 mr-sm-2 border'
								placeholder='Phone number'
								required
							/>
							<button
								type='submit'
								className='btn btn-white shadow mb-20 mb-md-0 ml-2 ml-md-0'>
								{loading ? 'Sending...' : 'Send'}
							</button>
							<footer>
								{error && (
									<div className='col-lg-12 col-md-12 col-sm-12 mb-4'>
										<p className='text-danger text-center h2'>
											{error.message}
										</p>
									</div>
								)}
								{success && (
									<div className='col-lg-12 col-md-12 col-sm-12 mb-4'>
										<p className='text-success text-center h2'>
											Thanks, we will contact you soon.
										</p>
									</div>
								)}
							</footer>
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
