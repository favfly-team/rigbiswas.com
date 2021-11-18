/* eslint-disable @next/next/no-img-element */
const CounterSection = ({ slice }) => {
	// console.log(slice);
	return (
		<section className='wrapper gray-wrapper overflow-hidden'>
			<div className='container inner'>
				<div className='row counter'>
					{slice?.items?.map((item, index) => (
						<CounterItem key={index} data={item} />
					))}
				</div>
			</div>
		</section>
	);
};

const CounterItem = ({ data }) => {
	const { title, number, icon } = data;
	return (
		<div className='col-md-4'>
			<div className='box bg-white shadow'>
				<div className='d-flex flex-row justify-content-center'>
					<div className='icon fs-58 icon-color color-lavender mr-25'>
						<img
							data-src={icon?.url}
							alt={icon?.alt}
							height='60'
							className='lozad'
						/>
					</div>
					<div>
						<h3 className='value'>{number[0]?.text}</h3>
						<p>{title[0]?.text}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CounterSection;
