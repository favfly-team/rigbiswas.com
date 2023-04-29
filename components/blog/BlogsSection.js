/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import Link from "next/link";
import dayjs from "dayjs";
dayjs().format();
// import countapi from "countapi-js";

const BlogsSection = ({ posts }) => {
  // console.log(posts);
  return (
    <div className="wrapper light-wrapper">
      <div className="container inner">
        <h2 className="section-title section-title-upper larger text-center">
          Latest Photography Blog Posts
        </h2>
        <p className="lead larger text-center">
          Here’s a log of our explorations, that we love to share with you!
        </p>
        <div className="space30"></div>
        <div className="row isotope grid boxed list-view">
          {posts?.results?.map((data, index) => (
            <BlogItem key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogItem = ({ data }) => {
  // console.log(data);
  const { title, featured_image, published_date } = data?.data;
  /* ===== COUNT & UPDATE NO. OF VIEWS ===== */
  // const [views, setViews] = useState(0);
  // useEffect(() => {
  // 	countapi.get('rigbiswas.com', data?.uid).then((result) => {
  // 		result?.value && setViews(result.value);
  // 	});
  // }, [data?.uid]);
  /* ===== END ===== */
  return (
    <div className="item post grid-sizer col-md-6 col-lg-4 paper print">
      <figure className="overlay overlay1 mb-15 rounded">
        <Link href={`/blog/${data?.uid}`}>
          <a>
            <img
              data-src={featured_image?.thumb?.url}
              alt={featured_image?.alt}
              className="lozad"
            />
          </a>
        </Link>
      </figure>
      <h4 className="post-title mb-10 font-weight-normal">
        <Link href={`/blog/${data?.uid}`}>
          <a>{title?.[0]?.text}</a>
        </Link>
      </h4>
      <div className="meta mb-15">
        <span className="date">
          {dayjs(published_date).format("DD MMM, YYYY")}
        </span>
        {/* <span className="views text-lowercase">
          <span>{views}</span> views
        </span> */}
        {/* <span className='category'>
					<a href='#'>Perspective</a>
				</span> */}
      </div>
    </div>
  );
};

export default BlogsSection;
