import * as S from './style';
import { CustomButton } from '../../../../components';
import SuggestedDataCard from '../suggestedDataCard';
import { Select } from 'antd';
import './antd.style.css';
import { useState } from 'react';

import SelectedDatasetsSection from '../selectedDatasetsSection';

const options = [
  { value: 'Housing transactions - monthly by postcode' },
  { value: 'Competitor performance mapping' },
];

const SuggestedDataSection = () => {
  const [selectedDataset, setSelectedDataset] = useState([]);
  console.log(selectedDataset);

  return (
    <S.SuggestedDataSection>
      <div className='suggested-datasets-container'>
        <h2>Suggested Datasets</h2>
        <div className='suggested-data-card-container'>
          <Select
            placeholder='Suggested Datasets'
            className='dont-show'
            mode='multiple'
            style={{ width: '100%' }}
            onChange={(selectedItem) => setSelectedDataset(selectedItem)}
          >
            {options.map((data) => (
              <Select.Option value={data.value} />
            ))}
          </Select>
        </div>
      </div>
      <SelectedDatasetsSection data={selectedDataset} />
    </S.SuggestedDataSection>
  );
};

export { SuggestedDataSection };
