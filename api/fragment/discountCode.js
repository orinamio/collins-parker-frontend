import gql from 'graphql-tag';

export const DISCOUNT_CODE_FRAGMENT = gql`
  fragment discountCodeFragment on DiscountCode {
    __typename
    amount
    percentage
    code
    message
    active
    expiresAt
  }
`;
