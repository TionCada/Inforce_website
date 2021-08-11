import React from 'react';
import './AppsCases.module.css';
import s from './AppsCases.module.css'
import OptionsBlockInner from "../../../common/OptionsBlock/OptionsBlockInner/OptionsBlockInner";
import Slider from "react-slick";
import SliderCard from "../../../common/SliderCard/SliderCard";
import ForPeeps from '../../../assets/images/slider/ForPeeps.svg'
import Beardstruggle from '../../../assets/images/slider/Beardstruggle.svg'
import Button from "../../../common/Button/Button";

function AppsCases() {

    var settings = {
        dots: false,
        infinite: false,
        speed: 800,
        slidesToScroll: 3,
        slidesToShow: 3,
        variableWidth: true
    };

    return (
        <div className={s.container}>
            <div className={s.optionsBlockContainer}>
                <div className={s.firstPart}>
                    <OptionsBlockInner subheader={'Apps cases'} header={'Projects that we have done'}
                                       mainText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                                       'Sit vestibulum pellentesque condimentum nisl suspendisse porta. '}/>
                </div>
                <div className={s.secondPart}>
                    <Button width={191} text={'View all projects'} backgroundColor={'#DF263E'} textColor={'#FFFFFF'}/>
                </div>
            </div>
            <div className={s.sliderContainer}>
                <Slider {...settings} className={s.slider}>
                    <div className={s.cardFirst}>
                        <SliderCard header={'ForPeeps'} text={'We\'ve partnered with ForPeeps to help them ' +
                        'build web & mobile app which can be used for more than 30 Scandinavian and European banks'} image={ForPeeps}/>
                    </div>
                    <div className={s.card}>
                        <SliderCard header={'Beardstruggle'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                        'Sit vestibulum pellentesque condimentum nisl suspendisse porta. '} image={Beardstruggle}/>
                    </div>
                    <div className={s.card}>
                        <SliderCard header={'Beardstruggle'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                        'Sit vestibulum pellentesque condimentum nisl suspendisse porta. '} image={Beardstruggle}/>
                    </div>
                    <div className={s.cardLast}>
                        <SliderCard header={'Beardstruggle'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                        'Sit vestibulum pellentesque condimentum nisl suspendisse porta. '} image={Beardstruggle}/>
                    </div>
                    <div className={s.cardLast}>
                        <SliderCard header={'Beardstruggle'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                        'Sit vestibulum pellentesque condimentum nisl suspendisse porta. '} image={Beardstruggle}/>
                    </div>
                </Slider>
                {/*<div className={s.camouflageBlock2}></div>*/}
            </div>
        </div>
    )
}

export default AppsCases;
