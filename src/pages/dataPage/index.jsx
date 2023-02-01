import * as S from './style';
import {
  SelectedDataSection,
  SuggestedDataSection,
  OutcomeRequired,
  SelectedDatasetsSection,
} from './dataPageComponents';
import ProceedToTraining from './dataPageComponents/proceedToTraining';

import DataContextProvider from '../../context/dataContext';

const Data = () => {
  return (
    <DataContextProvider>
      <S.Data>
        <SelectedDataSection />
        <div className='grid-container'>
          <div>
            <SuggestedDataSection />
            {/* <SelectedDatasetsSection /> */}
            <OutcomeRequired />
          </div>
          <ProceedToTraining />
        </div>
      </S.Data>
    </DataContextProvider>
  );
};

export default Data;
