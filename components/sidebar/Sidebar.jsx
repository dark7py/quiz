import style from './Sidebar.module.scss'
import {useState} from "react";
import data from "../../mock";
import Link from "next/link";

const createItem = (index) => (`<li className={style.sidebar_item} id={index}>{index}</li>`)

export default function Sidebar(props) {
    const [open, setOpen] = useState(true)

    let sidebarList = ''
    for (let i = 1; i <= props.countQuestions; i++) {
        sidebarList += createItem(i)
    }

    return (
        <div className={open ? style.sidebar : style.sidebar_close}>
            <div className={style.arrow} onClick={() => setOpen(!open)}>
                <img src={'/arrow-left.png'} alt={'arrow'}/>
            </div>
            <div className={style.sidebar_list}>
                {data.questions.map(({id}) => (
                    <Link href={`/quiz/${id}`}>
                        <div className={style.sidebar_item} key={id}>
                            {id}
                        </div>
                    </Link>
                ))}

            </div>
        </div>
    )
}
