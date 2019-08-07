import gql from 'graphql-tag';

export const CREATE_REVIEW = gql`
  mutation createReview($productId: String!, $comment: String!, $rating: Int) {
    createReview(productId: $productId, comment: $comment, rating: $rating) {
      __typename
      id
    }
  }
`;
