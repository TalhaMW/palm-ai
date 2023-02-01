import styled from 'styled-components';

const SelectedDatasets = styled.section`
  /* background-color: orange; */
  h2 {
    font-family: ${({ theme }) => theme.fonts_family.primary};
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    letter-spacing: 0.02em;
    padding-bottom: 14px;

    /* Secondary */

    color: #1d1d31;
  }
  margin-bottom: 40px;
  margin-top: 40px;

  .selected-data-sets-container {
    background: #ffffff;
    background-color: ${({ theme }) => theme.colors.input_bg};
    /* border: 1px solid #dfe3e8; */
    border-radius: 8px;
    min-height: 80px;
    padding-left: 24px;
    padding-right: 12px;
    padding-top: 16px;
    /* display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(1, minmax(0, 25px));
    gap: 10px; */
    /* display: flex; */

    @media screen and (max-width: 900px) {
      grid-template-columns: repeat(5, 1fr);
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (max-width: 526px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 426px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export { SelectedDatasets };
