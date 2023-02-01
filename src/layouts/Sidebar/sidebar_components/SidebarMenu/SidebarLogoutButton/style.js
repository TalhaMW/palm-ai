import styled from 'styled-components';
import theme from '../../../../../theme/theme';

const Button = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  max-width: 224px;
  width: 100%;
  padding: 6.5px 0;

  border-radius: 4px;

  p {
    font-family: ${({ theme }) => theme.fonts_family.primary};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;

    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export { Button };
