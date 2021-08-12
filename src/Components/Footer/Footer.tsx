import React from 'react';
import './Footer.module.css';
import s from './Footer.module.css';
import logoRed from '../../assets/images/logoRed.svg';
import icon from '../../assets/images/icon.svg';
import skypeIcon from '../../assets/images/skypeIcon.svg';
import linkedInIcon from '../../assets/images/linkedInIcon.svg';
import facebookIcon from '../../assets/images/facebookIcon.svg';
import {Link} from "@material-ui/core";
import NavigationLink from "../../common/NavigationLink/NavigationLink";
import Button from "../../common/Button/Button";

function Footer() {
    return (
        <div className={s.container}>
            <div className={s.generalInfoWrapper}>
                <img className={s.logo} src={logoRed}/>
                <p className={s.email}>e-mail@mail.com</p>
                <p className={s.phone}>+ 9 (999) 999 99-99</p>
                <img className={s.skypeIcon} src={skypeIcon}/>
                <img className={s.facebookIcon} src={facebookIcon}/>
                <img className={s.linkedInIcon} src={linkedInIcon}/>
                <img className={s.icon} src={icon}/>
            </div>
            <div className={s.navigationWrapper}>
                <div className={s.firstColumn}>
                    <div className={s.wrapper}>
                        <NavigationLink name={"Main"}/>
                    </div>
                    <div className={s.wrapper}>
                        <NavigationLink name={"Services"}/>
                    </div>
                    <div className={s.wrapper}>
                        <NavigationLink name={"Process"}/>
                    </div>
                    <div className={s.wrapper}>
                        <NavigationLink name={"Results"}/>
                    </div>
                </div>
                <div className={s.secondColumn}>
                    <div className={s.wrapper}>
                        <NavigationLink name={"About us"}/>
                    </div>
                    <div className={s.wrapper}>
                        <NavigationLink name={"Blog"}/>
                    </div>
                </div>
            </div>
            <div className={s.copyrightInfoWrapper}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nulla posuere scelerisque
                    eget placerat dignissim ac placerat. Ut nam ipsum aliquam auctor. Egestas purus odio
                    ornare pellentesque et cras. Nulla odio dolor euismod vel cursus. Sit pulvinar morbi
                    quis mattis ac auctor. Interdum leo gravida quis accumsan venenatis, scelerisque vitae,
                    curabitur. Maecenas nunc tellus pulvinar placerat. Dolor praesent id vitae ornare.</p>
                <p className={s.copyright}>Copyright © 2021 Inforce</p>
            </div>
        </div>
    );
}

export default Footer;
