import styled from 'styled-components';

const SidebarLogo = styled.div`
  @media screen and (max-width: 1110px) {
    padding-top: 20px;
  }
  max-width: 224px;
  display: flex;
  height: 64px;

  justify-content: center;
  align-items: center;
  margin-bottom: 24px;

  img {
    max-width: 144px;
    height: 22px;

    width: 100%;
  }
`;

export { SidebarLogo };
