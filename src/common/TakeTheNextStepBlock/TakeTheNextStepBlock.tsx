import React from 'react';
import './TakeTheNextStepBlock.module.css';
import s from './TakeTheNextStepBlock.module.css'
import Button from "../Button/Button";
import graph from '../../assets/images/graph.svg'

function TakeTheNextStepBlock() {
    return (
        <div className={s.container}>
            <div className={s.firstBlock}>
                <p>take the next step toward your personal and professional goals with Inforce</p>
                <div className={s.button}>
                    <Button width={257} text={'Free consultation'} backgroundColor={'#DF263E'} textColor={'#FFFFFF'}/>
                </div>
            </div>
            <div className={s.secondBlock}>
                <img src={graph}/>
            </div>
        </div>
    )
}

export default TakeTheNextStepBlock;
