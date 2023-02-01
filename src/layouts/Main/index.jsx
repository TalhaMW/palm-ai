import React from 'react';
import * as S from './style';
import MainHeader from './MainHeader';

const Main = ({ children }) => {
  return (
    <S.Main>
      {/* Main Header */}
      <MainHeader />
      {/*  */}
      <S.MainContent>{children}</S.MainContent>

      {/*  */}
    </S.Main>
  );
};

export default Main;
