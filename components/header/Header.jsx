import style from './Header.module.scss'
import Link from "next/link";

export default function Header(props) {
    // let totalTime = props.totalTimeInSec
    // const [time, setTime] = useState(totalTime)
    //
    // let timer = setTimeout(() => {
    //     if (time > 0) {
    //         setTime(time - 1)
    //     }
    // }, 1000)

    return (
        <div className={style.header}>

            <img className={style.header_icon} src={'/questionIcon.png'} alt={'icon'}/>
            <div className={style.header_time}>
                {props.questionsCounter}/{props.totalCountQuestions}
            </div>
            <img className={style.header_icon} src={'/timeIcon.png'} alt={'icon'}/>
            <div className={style.header_time}>
                {props.totalTimeInMin}:00
            </div>

            <h1 className={style.header_text}>{props.text}</h1>
            <Link href={'/quiz'}>
                <img className={style.header_hint} src={'/hintIcon.png'} alt={'icon'}/>
            </Link>
        </div>
    )
}
