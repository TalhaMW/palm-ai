import * as S from './style';
import { Select } from 'antd';
import OutcomeReqCard from '../outcomeReqCard';

import './outcome.antd.style.css';

const outcomeoptions = [
  {
    label:
      'Effect of Macroeconomic Environment on UK Scaling Tech Company Valuations 2018-2028',
  },
  {
    label:
      'Effect of Macroeconomic Environment on UK Scaling Tech Company Valuations 2018-2028',
  },
  {
    label:
      'Effect of Macroeconomic Environment on UK Scaling Tech Company Valuations 2018-2028',
  },
  {
    label:
      'Effect of Macroeconomic Environment on UK Scaling Tech Company Valuations 2018-2028',
  },
];

const OutcomeRequired = () => {
  return (
    <S.OutcomeRequired>
      <h2>Outcome Required</h2>

      {/* <div className='outcome-req-card-container'>
        <OutcomeReqCard />
      </div> */}

      <Select
        placeholder='Choose Outcome'
        style={{ width: '100%' }}
      >
        {outcomeoptions.map((data) => (
          <Select.Option value={data.label} />
        ))}
      </Select>
    </S.OutcomeRequired>
  );
};

export default OutcomeRequired;
