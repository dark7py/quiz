import styles from "./Button.module.scss";

export function Button(props) {
    return (
        <div className={styles.button}>
            <div className={styles.button__img}>
                <img src={props.picSrc}/>
            </div>
            <div className={styles.button__txt}>
                {props.text}
            </div>
        </div>
    )
}
