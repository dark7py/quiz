import style from './Header.module.scss'
import Link from "next/link";
import useTime from "../../hooks/useTime";

export default function Header(props) {
    const time = useTime(props.isResultPage, props.totalTimeInMin);

    return (
        <div className={style.header}>

            <img className={style.header_icon} src={'/questionIcon.png'} alt={'icon'}/>
            <div className={style.header_time}>
                {props.questionsCounter}/{props.totalCountQuestions}
            </div>
            <img className={style.header_icon} src={'/timeIcon.png'} alt={'icon'}/>
            {!props.isResultPage &&
                <div className={style.header_time}>
                    {time}
                </div>
            }

            <h1 className={style.header_text}>{props.text}</h1>
            <Link href={'/quiz'}>
                <img className={style.header_hint} src={'/hintIcon.png'} alt={'icon'}/>
            </Link>
        </div>
    )
}
