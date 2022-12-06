import styles from '../../styles/Quiz.module.scss'
import Link from "next/link";
import {getAllTests} from "../api/hello";

export default function Quiz(props) {
    const quizes = props.res[0].quiz;

    return (
        <div>
            <h1 className={styles.header}>Quiz page</h1>
            <div className={styles.cards}>
                {quizes.map(q => (

                    <div key={q.id} className={styles.card}>
                        <h2>{q.name}</h2>
                        <img src={'https://picsum.photos/seed/{q.name}/150/150'} alt={'img'}/>
                        <div>Количество вопросов: {q.questionsCount}</div>
                        <div>Ограничение по времени: {q.timeLimitInMin} минут</div>
                        <Link href={`/quiz/${q.id}/answer/1`}>
                            <div className={styles.link}>Пройти &rarr;</div>
                        </Link>
                    </div>


                ))}
            </div>
        </div>
    )
}

export const  getServerSideProps = async () => {
    const res = await getAllTests()
    delete res[0]._id

    return {
        props: {
            res
        }
    }
}
