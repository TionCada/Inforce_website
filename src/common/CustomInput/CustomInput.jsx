import React from 'react';
import './CustomInput.module.scss';
import s from './CustomInput.module.scss'

function CustomInput(props) {

  return (
      <div className={s.inputWrapper} style={{width: `${props.width}`}}>
      </div>
  );
}

export default CustomInput;
