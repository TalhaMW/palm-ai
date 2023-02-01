import React from 'react';
import * as S from './style';
import { cross } from '../../../../assets';

const SelectedDatasets = ({ text }) => {
  return (
    <S.SelectedData>
      <span className='selected-data-text'>{text}</span>
    </S.SelectedData>
  );
};

export default SelectedDatasets;
