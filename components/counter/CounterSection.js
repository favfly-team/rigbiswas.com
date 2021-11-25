/* eslint-disable @next/next/no-img-element */
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

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
						<h3 className='value'>
							<VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
								{({ isVisible }) => (
									<div style={{ height: 45 }}>
										{isVisible ? (
											<CountUp
												start={50}
												end={parseInt(number[0]?.text, 10)}
												duration={3}
											/>
										) : null}
										+
									</div>
								)}
							</VisibilitySensor>
						</h3>
						<p>{title[0]?.text}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CounterSection;
