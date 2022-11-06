import styles from './SkipButton.module.scss'

export default function SkipButton(props) {
    return (
        <div className={styles.skipBtn} onClick={props.onClick}>
            пропустить
        </div>
    )
}
