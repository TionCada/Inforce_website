import React from 'react';
import './Header.module.css';
import logo from '../../assets/images/logo.svg'
import s from './Header.module.css'
import Button from "../../common/Button/Button";
import NavigationLink from "../../common/NavigationLink/NavigationLink";

function Header() {
    return (
        <div className={s.container}>
            <img className={s.logo} alt={"'Process' logo"} src={logo}/>
            <div className={s.navigationWrapper}>
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
                <div className={s.wrapper}>
                    <NavigationLink name={"About us"}/>
                </div>
                <div className={s.wrapper}>
                    <NavigationLink name={"Blog"}/>
                </div>
                <div className={s.wrapper}>
                    <Button text={'Free consultation'} width={199}
                            textColor={'#DF263E'} backgroundColor={'#FFFFFF'}/>
                </div>
            </div>
        </div>
    );
}

export default Header;
