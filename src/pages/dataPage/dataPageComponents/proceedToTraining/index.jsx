import * as S from './style';
import { CustomButton } from '../../../../components';

const ProceedToTraining = () => {
  return (
    <div>
      <S.ProceedToTrain>
        <div className='proceed-to-text'>
          <h2>Proceed to training your data</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Venenatis lectus vestibulum
            id aliquam aliquam id nibh.
          </p>
        </div>

        <div className='train-data-button'>
          <CustomButton text='Train Data' />
        </div>
      </S.ProceedToTrain>
    </div>
  );
};

export default ProceedToTraining;
