import React from 'react';
import './SliderCentered.module.css';
import s from './SliderCentered.module.css'
import Slider from "react-slick";
import SliderCard from "./SliderCard/SliderCard";
import personImage from '../../assets/images/personImage.svg'

function SliderCentered() {

    const settings = {
        arrows: false,
        centerMode: true,
        speed: 500,
        variableWidth: true
    };

    return (
        <div>
            <div className={s.sliderContainer}>
                <Slider {...settings}>
                    <div className={s.cardFirst}>
                        <SliderCard quote={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet ' +
                        'et ornare in etiam porttitor lectus mi feugiat. Varius natoque nunc, aliquet elit odio neque ' +
                        'id. Montes, in diam odio proin mauris, nisl libero pretium.'} personImage={personImage} personName={'Name Surname'} appName={'NameOfApp'}/>
                    </div>
                    <div className={s.card}>
                        <SliderCard quote={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet ' +
                        'et ornare in etiam porttitor lectus mi feugiat. Varius natoque nunc, aliquet elit odio neque ' +
                        'id. Montes, in diam odio proin mauris, nisl libero pretium.'} personImage={personImage} personName={'Name Surname'} appName={'NameOfApp'}/>
                    </div>
                    <div className={s.card}>
                        <SliderCard quote={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet ' +
                        'et ornare in etiam porttitor lectus mi feugiat. Varius natoque nunc, aliquet elit odio neque ' +
                        'id. Montes, in diam odio proin mauris, nisl libero pretium.'} personImage={personImage} personName={'Name Surname'} appName={'NameOfApp'}/>
                    </div>
                    <div className={s.card}>
                        <SliderCard quote={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet ' +
                        'et ornare in etiam porttitor lectus mi feugiat. Varius natoque nunc, aliquet elit odio neque ' +
                        'id. Montes, in diam odio proin mauris, nisl libero pretium.'} personImage={personImage} personName={'Name Surname'} appName={'NameOfApp'}/>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default SliderCentered;
