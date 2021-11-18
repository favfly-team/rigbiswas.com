/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';

const NotFoundPage = () => {
	return (
		<section className='wrapper'>
			<div className='page-output text-center'>
				<div className='space150'></div>
				<div className='container'>
					<div className='page-404 layout-1'>
						<h2 className='title-404'>404</h2>
						<h3 className='des'>Oops! That Page Can’t Be Found.</h3>
						<p>Hey Couple! Looks like you're heading to a wrong page.</p>
						<div className='margin-tb-15px'>
							<Link href='/'>
								<a className='btn sm'>BACK TO HOME PAGE</a>
							</Link>
						</div>
					</div>
				</div>
				<div className='space150'></div>
			</div>
		</section>
	);
};

export default NotFoundPage;
