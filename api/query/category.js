import gql from 'graphql-tag';

export const CATEGORIES_QUERY = gql`
  query categories {
    categories {
      __typename
      id
      name
      image {
        url
      }
    }
  }
`;
