import * as S from './style';

const SidebarLogo = ({ logo }) => {
  return (
    <S.SidebarLogo>
      <img
        src={logo}
        alt=''
      />
    </S.SidebarLogo>
  );
};

export default SidebarLogo;
