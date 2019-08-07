import gql from 'graphql-tag';

import { DISCOUNT_CODE_FRAGMENT } from '../fragment/discountCode';

export const PROMO_CODES_QUERY = gql`
  query promoCodes {
    promoCodes {
      ...discountCodeFragment
    }
  }
  ${DISCOUNT_CODE_FRAGMENT}
`;

export const GET_DISCOUNT_CODE = gql`
  query discountCode($code: String!) {
    discountCode(code: $code) {
      ...discountCodeFragment
    }
  }
  ${DISCOUNT_CODE_FRAGMENT}
`;
