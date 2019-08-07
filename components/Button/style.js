import styled, { css } from 'styled-components';

export const Button = styled.button`
  font-size: 0.75rem;
  text-transform: uppercase;
  padding: 1rem 2.25rem;
  transition: 0.5s;
  line-height: 1;
  cursor: pointer;
  ${props =>
    css`
      color: white;
      background: ${props.theme.colors.primary};
      border: 1px solid ${props.theme.colors.primary};

      :hover {
        color: ${props.theme.colors.primary};
        background: white;
        border: 1px solid white;
      }
    `};

  ${props =>
    props.type == 'secondary' &&
    css`
      color: ${props.theme.colors.primary};
      background: white;
      border: 1px solid white;

      :hover {
        color: white;
        background: ${props.theme.colors.primary};
        border: 1px solid ${props.theme.colors.primary};
      }
    `};

  ${props =>
    props.type == 'transparent' &&
    css`
      color: ${props.theme.colors.primary};
      background: transparent;
      border: 1px solid ${props.theme.colors.primary};

      :hover {
        color: white;
        background: ${props.theme.colors.primary};
        border: 1px solid ${props.theme.colors.primary};
      }
    `};

  ${props =>
    props.size == 'medium' &&
    css`
      font-size: 0.625rem;
      height: 2.5rem;
    `};
`;

export const ButtonLinkStyle = styled(Button)`
  text-decoration: none;
`;
