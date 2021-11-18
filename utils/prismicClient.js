import { PrismicLink } from 'apollo-link-prismic';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';

const client = new ApolloClient({
	link: PrismicLink({
		uri: `https://${process.env.PRISMIC_ID}.cdn.prismic.io/graphql`,
		accessToken: process.env.PRISMIC_ACCESS_TOKEN,
	}),
	cache: new InMemoryCache(),
});

export default client;
