import React from 'react';
import './OptionsBlockInnerCentered.module.css';
import s from './OptionsBlockInnerCentered.module.css'

interface Props {
    subheader: string,
    header: string,
    mainText?: string
}

function OptionsBlockInnerCentered(props: Props) {
    return (
        <div className={s.container}>
            <p className={s.firstTextBlock}>{props.subheader}</p>
            <h2 className={s.secondTextBlock}>{props.header}</h2>
            {props.mainText ? <p className={s.thirdTextBlock}>{props.mainText}</p> : null}
        </div>
    )
}

export default OptionsBlockInnerCentered;
