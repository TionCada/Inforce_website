import React from 'react';
import './FeedbackField.module.css';
import s from './FeedbackField.module.css'
import OptionsBlockInner from "../OptionsBlock/OptionsBlockInner/OptionsBlockInner";

function FeedbackField() {
    return (
        <div className={s.container}>
            <div className={s.optionsBlockContainer}>
                <OptionsBlockInner subheader={'Got a project in mind?'} header={'Let’s talk about your next big idea'} mainText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
                ' Id nulla posuere scelerisque eget placerat dignissim ac placerat. Ut nam ipsum aliquam auctor. Egestas purus odio ornare pellentesque et cras. Nulla odio dolor euismod ' +
                'vel cursus. '}/>
            </div>
        </div>
    )
}

export default FeedbackField;
