import React from 'react';
import './FeedbackField.module.css';
import s from './FeedbackField.module.css'
import OptionsBlockInner from "../OptionsBlock/OptionsBlockInner/OptionsBlockInner";
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Button from "../Button/Button";

function FeedbackField() {

    const phoneRegExp = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    return (
        <div className={s.container}>
            <div className={s.optionsBlockContainer}>
                <OptionsBlockInner subheader={'Got a project in mind?'} header={'Let’s talk about your next big idea'} mainText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
                ' Id nulla posuere scelerisque eget placerat dignissim ac placerat. Ut nam ipsum aliquam auctor. Egestas purus odio ornare pellentesque et cras. Nulla odio dolor euismod ' +
                'vel cursus. '}/>
            </div>
            <Formik
                initialValues={{name: '', phone: '', email: ''}}
                validationSchema={Yup.object({
                    name: Yup.string().max(50, '*').required('*'),
                    phone: Yup.string().matches(phoneRegExp, '*').required('*'),
                    email: Yup.string().email('*').required('*')
                })}
                onSubmit={(values, {setSubmitting}) => {
                    setSubmitting(false);
                }}
            >
                <div className={s.formContainer}>
                    <Form>
                        <div className={s.input1}>
                            <div className={s.error1}>
                                <ErrorMessage name="name"/>
                            </div>
                            <label htmlFor="name">Your name</label>
                            <Field className={s.inputField} placeholder={'Mikle'} name="name" type="text"/>
                        </div>
                        <div className={s.input2}>
                            <div className={s.error2}>
                                <ErrorMessage name="phone"/>
                            </div>
                            <label htmlFor="phone">Your phone number</label>
                            <Field className={s.inputField} placeholder={'+ 1 (234) 567 89-12'} name="phone" type="text"/>
                        </div>
                        <div className={s.input3}>
                            <div className={s.error3}>
                                <ErrorMessage name="email"/>
                            </div>
                            <label htmlFor="email">E-mail</label>
                            <Field className={s.inputFieldLong} placeholder={'e-mail@mail.com'} name="email" type="text"/>
                        </div>
                        <div className={s.button}>
                            <Button width={257} text={'Free consultation'} backgroundColor={'#DF263E'} textColor={'#FFFFFF'}/>
                        </div>
                    </Form>
                </div>
            </Formik>
        </div>
    )
}

export default FeedbackField;
