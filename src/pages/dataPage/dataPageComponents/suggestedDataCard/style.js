import styled from 'styled-components';

const SuggestedDataCard = styled.div`
  background: ${({ theme }) => theme.colors.white};

  border-radius: 8px;
  margin-bottom: 16px;
  min-height: 80px;
  padding-left: 24px;
  display: flex;
  align-items: center;

  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.suggested_data_card_border};
  border-radius: 8px;

  font-family: ${({ theme }) => theme.fonts_family.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */

  /* Purple */

  color: ${({ theme }) => theme.colors.purple};
`;

export { SuggestedDataCard };
