import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic-configuration';

const ContactSection = ({ slice }) => {
	// console.log(slice);
	const { heading, contact_info } = slice.primary;
	return (
		<div className='wrapper light-wrapper'>
			<div className='container inner pt-60'>
				<div className='space50'></div>
				<div className='row'>
					<div className='col-md-8'>
						<h2 className='section-title section-title-upper larger'>
							LOOKING TO CAPTURE A MEMORY WITH US?
						</h2>

						<div className='space10'></div>
						<div className='form-container'>
							<form
								action='contact/vanilla-form.php'
								method='post'
								className='vanilla vanilla-form'
								noValidate>
								<div className='row'>
									<div className='col-md-6 pr-10'>
										<div className='form-group'>
											<input
												type='text'
												className='form-control'
												name='name'
												placeholder='Your name'
												required='required'
											/>
										</div>
									</div>

									<div className='col-md-6 pl-10'>
										<div className='form-group'>
											<input
												type='email'
												className='form-control'
												name='email'
												placeholder='Your e-mail'
												required='required'
											/>
										</div>
									</div>

									<div className='col-md-6 pr-10'>
										<div className='form-group'>
											<input
												type='tel'
												className='form-control'
												name='tel'
												placeholder='Phone no.'
											/>
										</div>
									</div>

									<div className='col-md-6 pl-10'>
										<div className='form-group'>
											<input
												type='date'
												className='form-control'
												name='date'
												placeholder='Main Shoot Date'
											/>
										</div>
									</div>
									<div className='col-md-6 pl-10'>
										<div className='form-group'>
											<select className='custom-select' required>
												<option defaultValue value=''>
													Type of Shoot
												</option>
												<option>Pre Wedding</option>
												<option>Wedding</option>
												<option>Baby Photography</option>
											</select>
										</div>
									</div>
									<div className='col-md-6 pl-10'>
										<div className='form-group'>
											<input
												type='text'
												className='form-control'
												name='subject'
												placeholder='Shoot Location'
											/>
										</div>
									</div>

									<div className='col-12'>
										<textarea
											name='message'
											className='form-control'
											rows='3'
											placeholder='If there are any details you want us to know, please share! '
											required></textarea>
										<div className='space20'></div>
										<button
											type='submit'
											className='btn'
											data-error='Fix errors'
											data-processing='Sending...'
											data-success='Thank you!'>
											Submit
										</button>
										<footer className='notification-box'></footer>
									</div>
								</div>
							</form>
						</div>
					</div>

					<aside className='col-md-4 sidebar'>
						<div className='box bg-white shadow p-30'>
							<h4>{heading[0]?.text}</h4>
							<RichText render={contact_info} linkResolver={linkResolver} />
						</div>
					</aside>
				</div>
				<div className='google-map'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14721.1006269285!2d88.472059!3d22.718012!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2f4b5797943cd8f4!2sRig%20Photography!5e0!3m2!1sen!2sin!4v1636610886410!5m2!1sen!2sin'
						width='100%'
						height='450'
						frameBorder='0'
						allowFullScreen></iframe>
				</div>
			</div>
		</div>
	);
};

export default ContactSection;
