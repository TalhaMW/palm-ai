import styled from 'styled-components';
import theme from '../../../theme/theme';

const MainHeader = styled.header`
  /* background-color: orange; */
  margin-bottom: 16px;
`;
const HeaderTopSection = styled.section`
  /* background-color: purple; */

  padding: 0 24px;
  min-height: 88px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 16px;

  .hamburger-react {
    display: none !important;
    @media screen and (max-width: 1110px) {
      display: block !important;
    }
  }

  .header-top-grid-container {
    align-items: center;
    height: 40px;
    min-height: 40px;
    width: 100%;
    /* background-color: red; */
    display: grid;
    grid-template-columns: 1fr min-content;
    gap: 20px;
    /* border: 1px solid black; */
  }
`;
const HeaderSearchSection = styled.section`
  padding: 0 24px;

  .input-container {
    display: grid;
    grid-template-columns: min-content 1fr;
    column-gap: 16px;
    height: 56px;
    align-items: center;
    padding: 0px 12px 0px 12px;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.input_bg};

    input {
      height: 100%;
      border: none;
      outline: none;
      display: flex;
      align-items: center;
      background: ${({ theme }) => theme.colors.input_bg};
      ::placeholder {
        font-family: ${({ theme }) => theme.fonts_family.primary};
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        /* identical to box height, or 143% */

        color: ${({ theme }) => theme.colors.input_placeholder};

        padding-left: 5px;
      }
    }
  }
`;

export { MainHeader, HeaderTopSection, HeaderSearchSection };
