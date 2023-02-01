import SelectedDataCard from '../selectedDataCard';
import { valuationData } from '../../../../assets';
import * as S from './style';
import data from './data';

const SelectedDataSection = () => {
  return (
    <S.SelectedDataSection>
      <h2 className='heading'>Selected Data</h2>
      <div className='selected-grid-container'>
        {data.map((data) => (
          <SelectedDataCard
            key={data.id}
            SvgComponent={data.SvgComponent}
            text={data.text}
            id={data.id}
            dataValue={data.value}
          />
        ))}
      </div>
    </S.SelectedDataSection>
  );
};

export default SelectedDataSection;
