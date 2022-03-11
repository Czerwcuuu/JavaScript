import React, {useEffect} from 'react';
import styles from "./Header.module.css";

const Header = props => {

    useEffect(() => {
        console.log("Header useEffect");

        setTimeout(()=>{//symulacja zapytani htpp
            console.log("http request is done")
        },1500);
    },[]);

    let buttonStyles = [styles.toggleButton];

    if(props.showArticles){
        buttonStyles.push(styles.red);
  
      }

    return(
        <div>
            <h1>Article App</h1>
            <button className={buttonStyles.join(' ')} onClick={props.toggleArticles}>Toggle articles</button>
        </div>
    );
}

export default Header;