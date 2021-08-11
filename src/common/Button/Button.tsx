import React from 'react';
import './Button.module.css';
import s from './Button.module.css'

interface Props {
    width: number,
    text: string,
    backgroundColor: string,
    textColor: string
}

function Button(props: Props) {
  return (
      <div className={s.buttonWrapper}>
          <button style={{color: `${props.textColor}`, backgroundColor: `${props.backgroundColor}`,
              width: `${props.width}`}} className={s.consultationButton}>{props.text}</button>
      </div>
  );
}

export default Button;
