import gql from 'graphql-tag';

export const ADDRESS_FRAGMENT = gql`
  fragment addressFragment on Address {
    __typename
    id
    firstName
    lastName
    type
    country
    phoneNumber
    state
    city
    zipcode
  }
`;
