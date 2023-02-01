import styled from 'styled-components';

const OutcomeRequired = styled.section`
  h2 {
    margin-bottom: 14px;
    font-family: ${({ theme }) => theme.fonts_family.priimary};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    text-transform: capitalize;

    /* Secondary */

    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export { OutcomeRequired };
