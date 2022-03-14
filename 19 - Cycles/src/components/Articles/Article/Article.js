import React from 'react';
import './Article.css';
import styles from './Article.module.css';

const article = (props) =>{

    console.log("articles");
    
    return(
        //<div className="Article" style={style}>
        <div className={styles.article}>
            <h2>
                {props.title}
            </h2>
            <p className={styles.violet}>
                {props.content}
            </p>
            <button onClick ={props.deleteArticle}>Delete</button>
            <br/><br/>
        </div>
    );
}

export default article;
