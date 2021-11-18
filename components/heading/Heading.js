import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic-configuration';

const Heading = ({ data }) => {
	const { heading, description } = data?.primary;
	return (
		<>
			{heading?.[0]?.text && (
				<h2 className='section-title section-title-upper larger text-center'>
					{heading?.[0]?.text}
				</h2>
			)}
			{description?.[0]?.text && (
				<div className='lead larger text-center'>
					<RichText render={description} linkResolver={linkResolver} />
					<div className='space30'></div>
				</div>
			)}
		</>
	);
};

export default Heading;
