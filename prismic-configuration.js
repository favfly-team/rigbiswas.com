// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = `https://${process.env.PRISMIC_ID}.cdn.prismic.io/api/v2`;

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = process.env.PRISMIC_ACCESS_TOKEN;

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === "home_page") return "/";
  else if (doc.type === "contact_page") return "/contact";
  else if (doc.type === "moments_page") return "/moments";
  else if (doc.type === "album_page") return "/albums";
  else if (doc.type === "films_page") return "/films";
  else if (doc.type === "film_page") return `/films/${doc.uid}`;
  else if (doc.type === "about_page") return "/about-rig";
  else if (doc.type === "reviews_page") return "/client-reviews";
  else if (doc.type === "services_page") return "/photography-services";
  else if (doc.type === "portfolio_page")
    return `/wedding-portfolio/${doc.uid}`;
  else if (doc.type === "blog_post") return `/blog/${doc.uid}`;
  else if (doc.type === "service_page") return `/${doc.uid}`;
  else if (doc.type === "album_page") return `/albums`;

  return "/";
};

// Additional helper function for Next/Link component
export const hrefResolver = (doc) => {
  if (doc.type === "home_page") return "/";
  else if (doc.type === "contact_page") return "/contact";
  else if (doc.type === "moments_page") return "/moments";
  else if (doc.type === "album_page") return "/albums";
  else if (doc.type === "films_page") return "/films";
  else if (doc.type === "film_page") return `/films/[slug]`;
  else if (doc.type === "about_page") return "/about-rig";
  else if (doc.type === "reviews_page") return "/client-reviews";
  else if (doc.type === "services_page") return "/photography-services";
  else if (doc.type === "portfolio_page") return `/wedding-portfolio/[slug]`;
  else if (doc.type === "blog_post") return `/blog/[slug]`;
  else if (doc.type === "service_page") return `/[slug]`;
  else if (doc.type === "album_page") return `/albums`;

  return "/";
};
