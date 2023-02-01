import * as S from './style';

const SidebarLogoutButton = ({ text, icon }) => {
  return (
    <S.Button>
      <div className='icon'>
        <img
          src={icon}
          alt={text}
        />
      </div>
      <p>{text}</p>
    </S.Button>
  );
};

export default SidebarLogoutButton;
