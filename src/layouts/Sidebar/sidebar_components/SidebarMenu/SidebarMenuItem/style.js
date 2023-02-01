import styled from 'styled-components';

const MenuItem = styled.div`
  margin-bottom: 24px;
  background-color: #e7eaee;
  padding: 12px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1110px) {
    gap: 45px;
  }
  .icon-text-container {
    display: flex;
    align-items: center;
    column-gap: 8px;
    &_icon {
      /* background-color: orange; */
      width: 20px;
      height: 20px;
      img {
        width: 100%;
      }
    }
    &_text {
      font-family: ${({ theme }) => theme.fonts_family.primary};
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
  .notification {
    width: 30px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.light_green};

    font-family: ${({ theme }) => theme.fonts_family.primary};
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;

    text-align: center;

    color: #ffffff;
  }
`;

export { MenuItem };
