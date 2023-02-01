import * as S from './style';

const CustomButton = ({ icon, text, solidClr, buttonType }) => {
  return (
    <S.Button buttonType={buttonType}>
      {icon && (
        <div className='img'>
          <img
            src={icon}
            alt=''
          />
        </div>
      )}
      <p className='text'>CustomButton</p>
    </S.Button>
  );
};

export default CustomButton;
