import styled from 'styled-components';

import { H5 } from '../../components/Typography';

import { media } from '../../configs/style';

export const SimilarProductHeader = styled(H5)`
  font-weight: bold;
  margin-top: 1rem;
`;

export const SimilarProductListContainer = styled.div`
  display: flex;
  padding: 1.25rem 0;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  @media ${media.lg} {
  }
`;
