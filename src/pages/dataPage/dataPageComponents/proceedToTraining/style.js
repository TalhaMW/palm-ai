//

import styled from 'styled-components';

const ProceedToTrain = styled.section`
  padding: 18px 21px 30px 16px;

  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 24px rgb(0 0 0 / 5%);
  border-radius: 8px;
  padding: 18px 21px 30px 16px;

  h2 {
    margin-bottom: 7px;
    font-family: ${({ theme }) => theme.fonts_family.primary};
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;

    /* Secondary */

    color: ${({ theme }) => theme.colors.secondary};
  }

  p {
    font-family: ${({ theme }) => theme.fonts_family.primary};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    /* or 143% */

    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.proceed_to_p};
  }

  .train-data-button {
    margin-top: 43px;
    width: 100%;
  }
  @media screen and (max-width: 705px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      max-width: 300px;
    }
    .train-data-button {
      max-width: 290px;
      width: 100%;
    }
  }
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      /* max-width: 300px; */
    }
    .train-data-button {
      max-width: 290px;
      width: 100%;
    }
  }
`;
export { ProceedToTrain };
// ` .proceed - to {
// padding: 18px 21px 30px 16px;

// background: ${({ theme }) => theme.colors.white};
// box-shadow: 0px 0px 24px rgb(0 0 0 / 5%);
// border-radius: 8px;
// padding: 18px 21px 30px 16px;

// h2 {
//   margin-bottom: 7px;
//   font-family: ${({ theme }) => theme.fonts_family.primary};
//   font-style: normal;
//   font-weight: 600;
//   font-size: 16px;
//   line-height: 19px;
//   display: flex;
//   align-items: center;
//   letter-spacing: 0.02em;

//   /* Secondary */

//   color: ${({ theme }) => theme.colors.secondary};
// }
// p {
//   font-family: ${({ theme }) => theme.fonts_family.primary};
//   font-style: normal;
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 20px;
//   /* or 143% */

//   letter-spacing: 0.02em;
//   color: ${({ theme }) => theme.colors.proceed_to_p};
// }
// .train-data-button {
//   margin-top: 43px;
//   width: 100%;
// }
/* @media screen and (max-width: 705px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        max-width: 300px;
      }
      .train-data-button {
        max-width: 290px;
        width: 100%;
      }
    }
  } */
