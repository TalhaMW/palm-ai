import * as S from './style';
const SidebarMenuItem = ({ icon, text, notification }) => {
  return (
    <S.MenuItem>
      <div className='icon-text-container'>
        <div className='icon-text-container_icon'>
          <img
            src={icon}
            alt=''
          />
        </div>
        <p className='icon-text-container_text'>{text}</p>
      </div>
      {notification && <div className='notification'>{notification}</div>}
    </S.MenuItem>
  );
};

export default SidebarMenuItem;
