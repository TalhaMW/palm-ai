import styled from 'styled-components';

const Data = styled.section`
  /* background-color: orange; */

  .grid-container {
    /* background-color: orange; */
    display: grid;
    grid-template-columns: 1fr minmax(0, 360px);
    column-gap: 21px;
    row-gap: 40px;

    @media screen and (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  }
`;

export { Data };
