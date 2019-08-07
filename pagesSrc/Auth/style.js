import styled from 'styled-components';

import Button from '../../components/Button';
import { H5 } from '../../components/Typography';

export const FormTitle = styled(H5)`
  font-weight: 900;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 22rem;
  padding: 0.75rem 1rem;
  margin: 1.5rem 0;
`;

export const FormField = styled.div`
  width: 100%;

  :not(:first-child) {
    margin-top: 1.5rem;
  }
`;

export const Submit = styled(Button)`
  width: 100%;

  :hover {
    color: white;
    background: rgba(0, 0, 0, 0.8);
    border: 1px solid black;
  }
`;

export const PasswordContainer = styled.div`
  display: flex;
  align-items: center;
  width: 2rem;
  height: 2rem;
`;
