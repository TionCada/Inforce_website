import React from 'react';
import './Post.module.css';
import s from './Post.module.css'
import news from "../../assets/images/news.svg";

interface Props {
    date: string,
    title: string,
    text: string
}

function Post(props: Props) {
    return (
        <div className={s.container}>
            <img src={news}/>
            <p className={s.date}>{props.date}</p>
            <p className={s.title}>{props.title}</p>
            <p className={s.text}>{props.text}</p>
        </div>
    )
}

export default Post;
