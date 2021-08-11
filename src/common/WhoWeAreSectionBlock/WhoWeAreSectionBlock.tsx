import React from 'react';
import './WhoWeAreSectionBlock.module.css';
import s from './WhoWeAreSectionBlock.module.css'
import circle from '../../assets/images/circle.svg'

interface Props {
    text: string
}

function WhoWeAreSectionBlock(props: Props) {
    return (
        <div className={s.container}>
            <div className={s.firstBlock}>
                <img className={s.circle} src={circle}/>
            </div>
            <div className={s.secondBlock}>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default WhoWeAreSectionBlock;
