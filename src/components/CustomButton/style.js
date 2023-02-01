import { type } from '@testing-library/user-event/dist/type';
import styled from 'styled-components';

const Button = styled.button.attrs(({ buttonType }) => {
  return { type: buttonType || 'button' };
})`
  border: none;
  padding: 14px 0;
  background-color: ${({ theme }) => theme.colors.light_green};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  .img {
    width: 16px;
    height: 16px;
    margin-right: 10px;

    img {
      width: 100%;
    }
  }
  .text {
    color: white !important;

    font-family: ${({ theme }) => theme.fonts_family.primary} !important;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;

    /* Shades/White */

    color: #ffffff;
  }
`;

export { Button };
