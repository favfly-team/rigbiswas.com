/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic-configuration';
import dayjs from 'dayjs';
dayjs().format();
import countapi from 'countapi-js';

const BlogPostSection = ({ data, uid }) => {
	const {
		title,
		description,
		featured_image,
		published_date,
		blog_post_content,
	} = data;

	/* ===== COUNT & UPDATE NO. OF VIEWS ===== */
	const [views, setViews] = useState(0);
	useEffect(() => {
		countapi.hit('rigbiswas.com', uid).then((result) => {
			result?.value && setViews(result.value);
		});
	}, [uid]);
	/* ===== END ===== */
	return (
		<section>
			<div className='wrapper light-wrapper'>
				<div className='container inner pt-60'>
					<div className='row'>
						<div className='col-md-8 mx-auto'>
							<div className='blog classic-view'>
								<div className='post text-center'>
									<div className='space40'></div>
									<div className='post-content text-left'>
										<h1 className='post-title'>
											<strong>{title[0]?.text}</strong>
										</h1>
										<RichText
											render={description}
											linkResolver={linkResolver}
										/>
										{/* META */}
										<div className='meta'>
											<span className='date'>
												{dayjs(published_date).format('DD MMM, YYYY')}
											</span>
											<span className='views text-lowercase'>
												{views} Views
											</span>
										</div>
										<figure className='rounded'>
											<img
												src={featured_image?.url}
												alt={featured_image?.alt}
											/>
										</figure>
										<div className='space40'></div>
										{/* ===== BLOG START ===== */}

										{blog_post_content?.map((data, index) => (
											<ContentBox key={index} data={data} />
										))}

										{/* <ul className='social social-mute social-s text-center'>
											<li>
												<a href='#'>
													<i className='fa fa-facebook'></i>
												</a>
											</li>
											<li>
												<a href='#'>
													<i className='fa fa-twitter'></i>
												</a>
											</li>
											<li>
												<a href='#'>
													<i className='fa fa-pinterest-p'></i>
												</a>
											</li>
											<li>
												<a href='#'>
													<i className='fa fa-google-plus'></i>
												</a>
											</li>
										</ul> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const ContentBox = ({ data }) => {
	if (data.type == 'image') {
		return (
			<figure className={`figure position-relative overflow-hidden rounded`}>
				<img
					data-src={`${data?.url}?&w=750`}
					className='img-fluid w-100 lozad'
					alt={data?.alt}
				/>
				<div className='wall position-absolute w-100 h-100'></div>
				<figcaption className='figure-caption position-absolute w-100 text-light px-2 text-nowrap overflow-auto'>
					{data?.copyright ? `Image Source: ${data?.copyright}` : ''}
				</figcaption>
			</figure>
		);
	} else if (data?.type == 'paragraph' && data?.text == '') {
		return '';
	} else return <RichText render={[data]} linkResolver={linkResolver} />;
};

export default BlogPostSection;
