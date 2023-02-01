import React from 'react';
import * as S from './style';
import SelectedDatasets from '../selectedDatasets';

const SelectedDatasetsSection = ({ data }) => {
  return (
    <S.SelectedDatasets>
      <h2>Selected Datasets</h2>
      <div className='selected-data-sets-container'>
        {data?.map((data) => (
          <SelectedDatasets text={data} />
        ))}
      </div>
    </S.SelectedDatasets>
  );
};

export default SelectedDatasetsSection;
