import styled from 'styled-components';

const SuggestedDataSection = styled.section`
  /* background-color: red; */
  /* border: 1px solid gray; */
  margin-bottom: 40px;

  /*  */
  .ant-d-option {
    background-color: orange !important;
  }

  /*  */
  .suggested-datasets-container {
    h2 {
      padding-bottom: 12px;

      font-family: ${({ theme }) => theme.fonts_family.primary};
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;

      letter-spacing: 0.02em;

      /* Secondary */

      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export { SuggestedDataSection };
