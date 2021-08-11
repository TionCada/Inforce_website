import React from 'react';
import './ReviewBlock.module.css';
import s from './ReviewBlock.module.css'
import stars from '../../assets/images/stars.svg'

function ReviewBlock() {
    return (
        <div className={s.container}>
            <p className={s.headerText}>We guarantee a successful project</p>
            <p className={s.mainText}>5 years on the market of Internet solutions. Mobile development is our core
                specialization</p>
            <img src={stars} alt={""}/>
        </div>
    )
}

export default ReviewBlock;
