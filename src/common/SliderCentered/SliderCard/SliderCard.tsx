import React from 'react';
import './SliderCard.module.css';
import s from './SliderCard.module.css'
import quoteSymbol from '../../../assets/images/quoteSymbol.svg'

interface Props {
    quote: string,
    personImage: string,
    personName: string,
    appName: string
}

function SliderCard(props: Props) {

    return (
        <div className={s.container}>
            <img className={s.quoteSymbolFirst} src={quoteSymbol}/>
            <div className={s.quote}>
                <p>{props.quote}</p>
            </div>
            <img className={s.quoteSymbolSecond} src={quoteSymbol}/>
            <img className={s.personImage} src={props.personImage}/>
            <p className={s.personName}>{props.personName}</p>
            <p className={s.appName}>{props.appName}</p>
        </div>
    )
}

export default SliderCard;
