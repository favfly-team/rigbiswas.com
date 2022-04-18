import { useState } from 'react';
import Airtable from 'airtable';
import { GrClose } from 'react-icons/gr';

const base = new Airtable({
	apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

const Modal = ({ setIsModal }) => {
	const [formData, setFormData] = useState({
		phone: '',
		email: '',
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const data = await base('Google Ads Queries').create([
				{
					fields: {
						Email: formData.email,
						Phone: formData.phone,

						Source: location.href,
						Status: 'Todo',
					},
				},
			]);

			// console.log(data);

			setFormData({
				phone: '',
				email: '',
			});
			setLoading(false);
			setIsModal(false);
		} catch (error) {
			alert(error);
			console.log(error);
			setLoading(false);
		}
	};

	return (
		<div className='modal_box'>
			<div className='modal_container'>
				<div className='modal_content'>
					<span className='modal_close_icon' onClick={() => setIsModal(false)}>
						<GrClose size={22} />
					</span>
					<div className='text-center'>
						<h2 className='pt-5 title'>
							Flat 10% Discount For <br /> Wedding Photography
						</h2>
						<span>**Offer Valid For Next 1 Hr Only</span>
					</div>
					<form onSubmit={handleSubmit}>
						<div className='moadl_body d-flex'>
							<div className='per_input_box'>
								<input
									type='tel'
									className='modal_input'
									placeholder='Enter Mobile No.'
									name='phone'
									value={formData.phone}
									onChange={handleChange}
									required
								/>
							</div>
							<div className='per_input_box'>
								<input
									type='text'
									className='modal_input'
									placeholder='Enter Email Address'
									name='email'
									value={formData.email}
									onChange={handleChange}
									required
								/>
							</div>
						</div>
						<button className='input_btn' type='submit'>
							{loading ? 'Sending...' : 'GET OFFER'}
						</button>
					</form>
				</div>
			</div>

			<style jsx>{`
				.title {
					line-height: 1.2;
					color: #000;
				}
				input {
					padding: 0 10px !important;
					width: 100%;
				}
				.modal_container {
					padding: 10px 20px !important;
				}
				h2 {
					font-size: 30px;
				}
			`}</style>
		</div>
	);
};

export default Modal;
