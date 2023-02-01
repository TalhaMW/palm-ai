import styled from 'styled-components';

const Menu = styled.div`
  margin-top: 24px;
  .menu-title {
    font-family: ${({ theme }) => theme.fonts_family.secondary};
    font-style: normal;
    font-weight: 600;
    font-size: 16px;

    color: ${({ theme }) => theme.colors.slate};
    margin-bottom: 16px;
  }
  .menu-items-container {
    margin-bottom: 24px;
    border-bottom: 1px solid #d0d5dd;
  }
`;
export { Menu };
