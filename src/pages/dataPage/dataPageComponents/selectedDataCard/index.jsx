import React, { useState } from 'react';
import styles from './selectedDataCard.module.css';
const SelectedDataCard = ({ SvgComponent, text, value, id, dataValue }) => {
  const [currentElem, setCurrentElem] = useState('');

  const changeHandler = (e) => {
    setCurrentElem(e.target.value);
  };

  return (
    <>
      <input
        className={styles.input}
        type='radio'
        id={`${id}`}
        onChange={changeHandler}
        name='selected-data'
        value={dataValue}
        checked={currentElem === dataValue}
        // style={{ display: 'none' }}
      />
      <label
        className={styles.label}
        htmlFor={`${id}`}
      >
        <div className='icon'>
          {/* <img
            src={icon}
            alt={text}
          /> */}
          <SvgComponent className={styles.svg} />
        </div>
        <p>{text}</p>
      </label>
    </>
  );
};

export default SelectedDataCard;
