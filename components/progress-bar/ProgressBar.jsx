import style from './ProgressBar.module.scss'

export default function ProgressBar(props) {
    const widthPercent = props.answeredQuestions / props.countQuestions * 100;

    return (
        <div className={style.line}>
            <div className={style.line_blue} style={{width: widthPercent + '%'}}/>
        </div>
    )
}
