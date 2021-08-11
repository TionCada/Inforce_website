import React from 'react';
import './Blog.module.css';
import s from './Blog.module.css'
import OptionsBlockInner from "../../common/OptionsBlock/OptionsBlockInner/OptionsBlockInner";
import Post from "../../common/Post/Post";
import Button from "../../common/Button/Button";

function Blog() {

    return (
        <div className={s.container}>
            <div className={s.optionsBlockContainer}>
                <OptionsBlockInner subheader={'Blog'} header={'Check our latest news'}/>
                <Button width={184} text={'Go to blog page'} backgroundColor={'#DF263E'} textColor={'#FFFFFF'}/>
            </div>
            <div className={s.post}>
                <Post date={'30.07.2021'} title={'Post title'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing ' +
                'elit. Convallis massa consectetur nec ut aliquam eu.'}/>
            </div>
            <div className={s.post}>
                <Post date={'30.07.2021'} title={'Post title'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing ' +
                'elit. Convallis massa consectetur nec ut aliquam eu.'}/>
            </div>
            <div className={s.post}>
                <Post date={'30.07.2021'} title={'Post title'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing ' +
                'elit. Convallis massa consectetur nec ut aliquam eu.'}/>
            </div>
        </div>
    )
}

export default Blog;
