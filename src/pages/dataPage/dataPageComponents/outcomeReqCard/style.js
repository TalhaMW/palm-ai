import styled from 'styled-components';

const OutcomeReqCard = styled.div`
  min-height: 80px;
  display: flex;
  align-items: center;
  padding: 30px 20px;

  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.suggested_data_card_border};
  border-radius: 8px;

  p {
    min-height: 20px;

    font-family: ${({ theme }) => theme.fonts_family.primary};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height, or 125% */

    /* Secondary */

    color: ${({ theme }) => theme.colors.primarry};
  }
`;

export { OutcomeReqCard };
