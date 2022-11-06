import styles from './RadioButton.module.scss'
import {useState} from "react";


export function RadioButton(props) {
    const {text, id, isCorrect, isDisabled, onClick, selected} = props


    return (
        <div id={id} key={id} className={`${styles.btn}
        ${isDisabled ? styles.btn_disabled : styles.btn}`}
             onClick={onClick}>
            <div className={styles.radio}>
                <div className={selected && !isDisabled ? styles.btn_selected : styles.btn__radio}>
                    { (!isDisabled) && (selected) && <div className={styles.btn__dot}/>}
                </div>
            </div>
            <div className={styles.btn__text}>
                {text}
            </div>
        </div>
    )
}
