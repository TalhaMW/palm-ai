import styled from 'styled-components';

const Sidebar = styled.section`
  /* border: 3px solid gray; */
  height: 100vh;
  overflow-y: hidden;

  .fix-cnt {
    /* position: fixed; */
    /* background-color: red; */
    padding: 24px 24px 0 24px;
  }

  transition: 0.5s all ease-in-out;
  .hamburger-react {
    display: none !important;
    position: absolute !important;
    top: 0;
    right: 0;
  }
  @media screen and (max-width: 1110px) {
    .hamburger-react {
      display: block !important;
    }
  }
  /* background-color: red; */
  background-color: white;
  /* background-color: green; */

  z-index: 10;

  @media screen and (max-width: 1110px) {
    border-right: 1px solid #d3d3d3;
    position: fixed;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateX(0)' : 'translateX(-276px)'};
  }
`;

export { Sidebar };
