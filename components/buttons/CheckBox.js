import styles from './CheckBox.module.scss'
import {useState} from "react";


export function CheckBox(props) {
    const checkboxHandler = () => {
        //props.selected ? props.selected = false : props.selected = true
        console.log(props)
    }

    const [selected, setSelected] = useState(false)

    return (
        <div className={`${styles.btn}
        ${props.isDisabled ? styles.btn_disabled : styles.btn}`
        } onClick={() => {!props.isDisabled && setSelected(!selected); props.onClick()}} >
            <div className={styles.radio}>
                <div className={selected ? styles.btn_selected : styles.btn__radio}>
                    {(selected)
                        &&
                        <svg className={styles.btn_marker} width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M5 10L0 5.19231L1.4 3.84615L5 7.30769L12.6 0L14 1.34615L5 10Z" fill="#EEEEEE"/>
                        </svg>
                    }
                </div>
            </div>
            <div className={styles.btn__text}>
                {props.text}
            </div>
        </div>
    )
}
