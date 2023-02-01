import React, { useEffect, useState } from 'react';
import { useHamburgerToggle } from '../../hooks';
import * as S from './style';
import { CustomButton } from '../../components';
import { plus, sidebarLogo } from '../../assets';
import { SidebarLogo, SidebarMenu } from './sidebar_components';
import { useContext } from 'react';
import { HamburgerContext } from '../../context/hamburgerMenuContext';
import { Squash as Hamburger } from 'hamburger-react';

const SideBar = () => {
  const { isOpen, openMenu, closeMenu } = useContext(HamburgerContext);

  const hamburgerHandler = () => {
    if (isOpen) {
      closeMenu();
    } else if (!isOpen) {
      openMenu();
    }
  };

  return (
    <S.Sidebar isOpen={isOpen}>
      <div className='fix-cnt'>
        <Hamburger
          size={20}
          toggled={isOpen}
          toggle={hamburgerHandler}
        />
        <SidebarLogo logo={sidebarLogo} />
        <CustomButton
          icon={plus}
          text='New Research'
          buttonType='button'
        />

        <SidebarMenu menuTitle='Menu' />
      </div>
    </S.Sidebar>
  );
};

export default SideBar;
