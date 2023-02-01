import styled from 'styled-components';

const SelectedDataSection = styled.div`
  margin-bottom: 24px;
  .heading {
    padding: 7px;

    font-family: ${({ theme }) => theme.fonts_family.primary};
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
  }
  .selected-grid-container {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 265px));
    column-gap: 20px;
    @media screen and (max-width: 900px) {
      grid-template-columns: repeat(3, minmax(0, 265px));
    }
    @media screen and (max-width: 705px) {
      grid-template-columns: repeat(1, 1fr);
      grid-row-gap: 30px;
    }
  }
`;

export { SelectedDataSection };
