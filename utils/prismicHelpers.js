import Prismic from "@prismicio/client";
import { Link } from "prismic-reactjs";
import { default as NextLink } from "next/link";
import {
  apiEndpoint,
  accessToken,
  linkResolver,
  hrefResolver,
} from "../prismic-configuration";

// Helper function to convert Prismic Rich Text links to Next/Link components
export const customLink = (type, element, content, children, index) => (
  <NextLink
    key={element.data.id}
    href={hrefResolver(element.data)}
    as={linkResolver(element.data)}>
    <a>{content}</a>
  </NextLink>
);

export const DocLink = ({ children, link, linkClass }) => {
  if (link) {
    // If the link is an internal link, then return a NextLink
    if (link.link_type && link.link_type === "Document") {
      return (
        <NextLink href={linkResolver(link)} className={linkClass}>
          {children}
        </NextLink>
      );
    }

    // Otherwise return a normal anchor element
    return (
      <a href={Link.url(link)} className={linkClass}>
        {children}
      </a>
    );
  }
  return null;
};

// Client method to query documents from the Prismic repo
export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};

export default Client;
