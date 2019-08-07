import gql from 'graphql-tag';

export const CREATE_ADDRESS = gql`
  mutation createAddress(
    $firstName: String
    $lastName: String
    $address: AddressType!
    $type: String!
    $country: String!
    $phoneNumber: String
    $state: String!
    $city: String!
    $zipcode: String!
  ) {
    createAddress(
      firstName: $firstName
      lastName: $lastName
      address: $address
      type: $type
      country: $country
      phoneNumber: $phoneNumber
      state: $state
      city: $city
      zipcode: $zipcode
    ) {
      __typename
      id
    }
  }
`;

export const UPDATE_ADDRESS = gql`
  mutation updateAddress(
    $firstName: String
    $lastName: String
    $address: String
    $type: String
    $country: String
    $phoneNumber: String
    $state: String
    $city: String
    $zipcode: String
  ) {
    updateAddress(
      firstName: $firstName
      lastName: $lastName
      address: $address
      type: $type
      country: $country
      phoneNumber: $phoneNumber
      state: $state
      city: $city
      zipcode: $zipcode
    ) {
      __typename
      id
    }
  }
`;

export const DELETE_ADDRESS = gql`
  mutation deleteAddress($id: ID!) {
    deleteAddress(id: $id) {
      __typename
      id
    }
  }
`;
