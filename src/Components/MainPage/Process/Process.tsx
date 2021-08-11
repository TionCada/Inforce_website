import React from 'react';
import './Process.module.css';
import s from './Process.module.css'
import devicesLogo from '../../../assets/images/devicesLogo.svg'
import smileLogo from '../../../assets/images/smileLogo.svg'
import OptionsBlock from "../../../common/OptionsBlock/OptionsBlock";
import smallBackground from '../../../assets/images/smallBackground.svg'

function Process() {
    return (
        <div className={s.container}>
            <div className={s.firstBlock}>
                <OptionsBlock subheader={'The Inforce process'}
                              header={'WE\'LL MAKE IT GO LIVE FAST!'}
                              mainText={'Our client relationships go beyond technology. We get ' +
                              'to know your vision and implement solutions in the most efficent way' +
                              ' with a relevant technological stack. Our delivery is reliable, ' +
                              'future-proof, easy-to-support & easy-to-scale.'}
                              icon1={devicesLogo} icon2={smileLogo}
                              subheader1={'Scalable'} subheader2={'User-friendly'}
                              minorText1={'Lorem ipsum dolor sit amet, consectetur adipiscing ' +
                              'elit. Sit vestibulum pellentesque condimentum nisl suspendisse porta. '}
                              minorText2={'Lorem ipsum dolor sit amet, consectetur adipiscing ' +
                              'elit. Sit vestibulum pellentesque condimentum nisl suspendisse porta. '}
                              buttonText={'Full process'}/>
            </div>
            <div className={s.secondBlock}>
                <div className={s.ellipse}>
                    <img className={s.circleBackground} src={smallBackground}/>
                    <div className={s.circleContainer}>
                        <div className={s.section1}>
                            <div className={s.contentContainer}>
                                <div className={s.innerContainer1}>
                                    <p className={s.number}>6</p>
                                    <p className={s.text}>Maintenance</p>
                                </div>
                            </div>
                        </div>
                        <div className={s.section2}>
                            <div className={s.contentContainer}>
                                <div className={s.innerContainer2}>
                                    <p className={s.number}>5</p>
                                    <p className={s.text}>Testing &</p>
                                    <p className={s.text}>integration</p>
                                </div>
                            </div>
                        </div>
                        <div className={s.section3}>
                            <div className={s.contentContainer}>
                                <div className={s.innerContainer3}>
                                    <p className={s.number}>4</p>
                                    <p className={s.text}>Implementation</p>
                                </div>
                            </div>
                        </div>
                        <div className={s.section4}>
                            <div className={s.contentContainer}>
                                <div className={s.innerContainer4}>
                                    <p className={s.number}>3</p>
                                    <p className={s.text}>Design</p>
                                </div>
                            </div>
                        </div>
                        <div className={s.section5}>
                            <div className={s.contentContainer}>
                                <div className={s.innerContainer5}>
                                    <p className={s.number}>2</p>
                                    <p className={s.text}>Analysis</p>
                                </div>
                            </div>
                        </div>
                        <div className={s.section6}>
                            <div className={s.contentContainer}>
                                <div className={s.innerContainer6}>
                                    <p className={s.number}>1</p>
                                    <p className={s.text}>Planning</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process;