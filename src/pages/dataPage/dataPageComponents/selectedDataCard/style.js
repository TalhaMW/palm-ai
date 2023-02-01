import styled from 'styled-components';
import theme from '../../../../theme/theme';

const SelectedDataCard = styled.label.attrs(({ id }) => ({ htmlFor: id }))`
  /* background-color: red; */
  display: flex;
  align-items: center;
  gap: 14px;

  background: ${({ theme, active }) =>
    active ? theme.colors.light_green : theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.purple};
  border-radius: 5px;

  min-height: 80px;
  padding: 19px 22px 20px 16px;

  p {
    font-family: ${({ theme }) => theme.fonts_family.primary};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export { SelectedDataCard };
