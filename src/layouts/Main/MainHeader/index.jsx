import { useState } from 'react';
import { useHamburgerToggle } from '../../../hooks';
import { useContext } from 'react';
import { HamburgerContext } from '../../../context/hamburgerMenuContext';
import * as S from './style';
import { profileAvatar, searchIcon } from '../../../assets';
import { Squash as Hamburger } from 'hamburger-react';
const MainHeader = () => {
  const { isOpen, setOpen } = useHamburgerToggle();
  const value = useContext(HamburgerContext);
  console.log('val', value);
  const hamburgerHandler = () => {
    if (value.isOpen) {
      value.closeMenu();
    } else if (!value.isOpen) {
      value.openMenu();
    }
  };
  return (
    <S.MainHeader>
      <S.HeaderTopSection>
        <Hamburger
          size={20}
          toggled={value.isOpen}
          toggle={hamburgerHandler}
        />
        <div className='header-top-grid-container'>
          <h2 className='heading'>Search</h2>
          <div className='profile-avatar'>
            <img
              src={profileAvatar}
              alt=''
            />
          </div>
        </div>
      </S.HeaderTopSection>
      <S.HeaderSearchSection>
        {/* Saerch */}
        <div className='input-container'>
          <div className='input-container_search-icon'>
            <img
              src={searchIcon}
              alt=''
            />
          </div>
          <input
            type='text'
            placeholder='How does the reduction in inflation next year affect valuations'
          />
        </div>
      </S.HeaderSearchSection>
    </S.MainHeader>
  );
};

export default MainHeader;
