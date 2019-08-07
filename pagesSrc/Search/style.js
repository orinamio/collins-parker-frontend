import styled from 'styled-components';

import Select from '../../components/Select';

import { media } from '../../configs/style';

export const ProductFilterContainer = styled.div`
  display: flex;

  @media ${media.md} {
    justify-content: space-around;
    margin: 3rem 0;
  }
`;

export const ProductFilter = styled(Select)`
  @media ${media.md} {
    max-width: 100%;
    margin: 0 2rem;
  }
`;
