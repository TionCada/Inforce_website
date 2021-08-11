import React from 'react';
import './SliderCard.module.css';
import s from './SliderCard.module.css'

interface Props {
    image: string,
    header: string,
    text: string
}

function SliderCard(props: Props) {

    return (
        <div className={s.container}>
            <img src={props.image}/>
            <h3 className={s.cardHeader}>{props.header}</h3>
            <p className={s.cardText}>{props.text}</p>
        </div>
    )
}

export default SliderCard;
