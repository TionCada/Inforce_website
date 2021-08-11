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
            <img src={quoteSymbol}/>
            <p className={s.quote}>{props.quote}</p>
            <img src={props.personImage}/>
            <p>{props.personName}</p>
            <p>{props.appName}</p>
            <img src={quoteSymbol}/>
        </div>
    )
}

export default SliderCard;
