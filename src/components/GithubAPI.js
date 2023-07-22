// GithubAPI.js
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer {process.env.GH_TOKEN}`
  },
  cache: new InMemoryCache()
});

export const fetchRepos = async () => {
  const query = gql`
    query {
      viewer {
        repositories(first: 10, orderBy: {field: CREATED_AT, direction: DESC}) {
          nodes {
            name
            description
            object(expression: "master:README.md") {
              ... on Blob {
                text
              }
            }
          }
        }
      }
    }
  `;

  const { data } = await client.query({ query });
  return data.viewer.repositories.nodes;
};
