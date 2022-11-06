import styles from './AnswerButton.module.scss'
import {useState} from "react";
import Link from "next/link";


export function AnswerButton(props) {
    return(
        <div className={props.isDisabled ? styles.button_disabled : styles.button} id={props.id} key={props.id} onClick={props.onClick} disabled={props.isDisabled}>
            {props.text}
        </div>
    )
}
