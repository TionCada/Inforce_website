import React from 'react';
import './WeAreInforce.module.css';
import s from './WeAreInforce.module.css'
import OptionsBlockInnerCentered from "../../../common/OptionsBlock/OptionsBlockInnerCentered/OptionsBlockInnerCentered";
import NumberCard from "../../../common/NumberCard/NumberCard";
import Button from "../../../common/Button/Button";

function WeAreInforce() {
    return (
        <div className={s.container}>
            <OptionsBlockInnerCentered subheader={'We are Inforce'} header={'You need us'}/>
            <div className={s.firstNumberCard}>
                <NumberCard number={'01'} text={'To increase sales, giving customers the opportunity to place orders directly without opening a browser.'}/>
            </div>
            <div className={s.numberCard}>
                <NumberCard number={'02'} text={'To increase sales, giving customers the opportunity to place orders directly without opening a browser.'}/>
            </div>
            <div className={s.numberCard}>
                <NumberCard number={'03'} text={'To create a positive image in the eyes of the target audience since every self-respecting company.'}/>
            </div>
            <div className={s.numberCard}>
                <NumberCard number={'04'} text={'To keep customers updated on new products, promotions, optimize personal account management, etc.'}/>
            </div>
            <div className={s.button}>
                <Button width={257} text={'Free consultation'} backgroundColor={'#DF263E'} textColor={'#FFFFFF'}/>
            </div>
        </div>
    )
}

export default WeAreInforce;