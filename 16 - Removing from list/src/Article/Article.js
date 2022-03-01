import React from 'react';



const article = (props) =>{

    return(
        <div>
            <h2>
                {props.title}
            </h2>
            <p>
                {props.content}
            </p>
            <button onClick ={props.deleteArticle}>Delete</button>
            <br/><br/>
        </div>
    );
}

export default article;