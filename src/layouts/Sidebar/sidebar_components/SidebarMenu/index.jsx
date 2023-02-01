import React from 'react';
import * as S from './style';
import SidebarMenuItem from './SidebarMenuItem';
import SidebarLogoutButton from './SidebarLogoutButton';
import {
  libraryItem,
  searchItemIcon,
  reports,
  teams,
  notification,
  logout,
  settings,
} from '../../../../assets';

const SidebarMenu = ({ menuTitle }) => {
  return (
    <S.Menu>
      <div className='menu-title'>{menuTitle}</div>

      <div className='menu-items-container'>
        <SidebarMenuItem
          icon={libraryItem}
          text='Library'
        />
        <SidebarMenuItem
          icon={searchItemIcon}
          text='Search'
        />
        <SidebarMenuItem
          icon={reports}
          text='Reports'
          notification='5'
        />
        <SidebarMenuItem
          icon={teams}
          text='Teams'
        />
        <SidebarMenuItem
          icon={notification}
          text='Notifications'
          notification='2'
        />
        <SidebarMenuItem
          icon={settings}
          text='Settings'
        />
      </div>
      <SidebarLogoutButton
        icon={logout}
        text='Log out'
      />
    </S.Menu>
  );
};

export default SidebarMenu;
