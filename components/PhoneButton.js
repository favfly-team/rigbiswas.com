import { FaPhoneAlt } from 'react-icons/fa';

const PhoneButton = ({ number }) => {
	return (
		<>
			{number && (
				<>
					{/* ===== FOR MOBILE & TABLET */}
					<a
						href={`tel:${number}`}
						target='_blank'
						rel='noreferrer nofollow'
						className='btn-whatsapp-pulse d-lg-none'>
						<i className='fab fa-whatsapp'>
							<FaPhoneAlt style={{ verticalAlign: 'top' }} />
						</i>
					</a>
				</>
			)}

			<style jsx>{`
				.btn-whatsapp-pulse {
					background: #40e0d0;
					color: white;
					position: fixed;
					z-index: 999;
					bottom: 10px;
					left: 10px;
					font-size: 30px;
					display: flex;
					justify-content: center;
					align-items: center;
					width: 0;
					height: 0;
					padding: 30px;
					text-decoration: none;
					border-radius: 50%;
					animation-name: pulse;
					animation-duration: 1.5s;
					animation-timing-function: ease-out;
					animation-iteration-count: infinite;
				}
				.fab {
					line-height: 1;
				}

				@keyframes pulse {
					0% {
						box-shadow: 0 0 0 0 rgba(0, 255, 255, 0.5);
					}
					80% {
						box-shadow: 0 0 0 14px rgba(0, 255, 255, 0);
					}
				}
			`}</style>
		</>
	);
};

export default PhoneButton;
