import React from 'react';
import './NumberCard.module.css';
import s from './NumberCard.module.css'
import {Link} from 'react-router-dom'

interface Props {
    number: string,
    text: string
}

function NumberCard(props: Props) {

    return (
        <div className={s.outerContainer}>
            <div className={s.container}>
                <div className={s.innerContainer}>
                    <p className={s.number}>{props.number}</p>
                    <hr/>
                    <p className={s.text}>{props.text}</p>
                    <div className={s.link}>
                        <Link to="/hello">More info</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NumberCard;
