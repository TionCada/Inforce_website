import React from 'react';
import './NavigationLink.module.css';
import s from './NavigationLink.module.css'

interface Props {
    name: string
}

function NavigationLink(props: Props) {
  return (
      <div className={s.linkWrapper}>
          <a className={s.link}>{props.name}</a>
      </div>
  );
}

export default NavigationLink;
