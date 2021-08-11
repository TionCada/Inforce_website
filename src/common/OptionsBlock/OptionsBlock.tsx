import React from 'react';
import './OptionsBlock.module.css';
import s from './OptionsBlock.module.css'
import Button from "../Button/Button";
import OptionsBlockInner from "./OptionsBlockInner/OptionsBlockInner";

interface Props {
    subheader: string,
    header: string,
    mainText: string,
    icon1: string,
    icon2: string,
    subheader1: string,
    subheader2: string,
    minorText1: string,
    minorText2: string,
    buttonText: string
}

function OptionsBlock(props: Props) {
    return (
        <div className={s.container}>
            <OptionsBlockInner subheader={props.subheader} header={props.header} mainText={props.mainText}/>
                <div className={s.firstSubBlock}>
                    <img className={s.rocketLogo} src={props.icon1}/>
                    <p className={s.firstTextBlock}>{props.subheader1}</p>
                    <p className={s.secondTextBlock}>{props.minorText1}</p>
                </div>
                <div className={s.secondSubBlock}>
                    <img className={s.phoneLogo} src={props.icon2}/>
                    <p className={s.thirdTextBlock}>{props.subheader2}</p>
                    <p className={s.fourthTextBlock}>{props.minorText2}</p>
                </div>
                <div className={s.button}>
                    <Button width={157} text={props.buttonText}
                            textColor={'#FFFFFF'}
                            backgroundColor={'#DF263E'}/>
                </div>
        </div>
    )
}

export default OptionsBlock;
