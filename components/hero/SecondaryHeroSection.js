import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic-configuration';

const SecondaryHeroSection = ({ slice }) => {
	// console.log(slice);
	const { heading, description } = slice.primary;
	return (
		<section>
			<div className='wrapper bg-pastel-yellow'>
				<div className={`container inner pt-140 `}>
					<div className='row'>
						<div className='col-md-10 mx-auto px-2 text-center'>
							<div className='heading'>
								<h1>
									<strong className='font-weight-600'>
										{heading[0]?.text}
									</strong>
								</h1>
							</div>
							<div className='space10'></div>
							<div className='sub-heading2'>
								<RichText render={description} linkResolver={linkResolver} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SecondaryHeroSection;
