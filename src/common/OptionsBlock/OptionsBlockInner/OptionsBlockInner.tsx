import React from 'react';
import './OptionsBlockInner.module.css';
import s from './OptionsBlockInner.module.css'

interface Props {
    subheader: string,
    header: string,
    mainText: string
}

function OptionsBlockInner(props: Props) {
    return (
        <div className={s.container}>
                <p className={s.firstTextBlock}>{props.subheader}</p>
                <h2 className={s.secondTextBlock}>{props.header}</h2>
                <p className={s.thirdTextBlock}>{props.mainText}</p>
        </div>
    )
}

export default OptionsBlockInner;
