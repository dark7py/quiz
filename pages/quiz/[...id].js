import Header from "../../components/header/Header";
import QuestionBlock from "../../components/question-block/QuestionBlock";
import ProgressBar from "../../components/progress-bar/ProgressBar";
import Timer from "../../components/timer/Timer";
import styles from "../../styles/QuizAnswer.module.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import {useEffect, useState} from "react";
import data from "../../mock";

export const getServerSideProps = (context) => {
    const {id} = context.params
    return {
        props: {questionsCounter: id[2], quizIndex: id[0]}
    }
}


export default function Id({questionsCounter, quizIndex}) {
    const [active, setActive] = useState(true)
    const quiz = data.quiz[quizIndex]

    useEffect(() => {
        setActive(true)
    }, [questionsCounter])

    return (
        <>
            <div className={styles.body}>
                <Header text={quiz.name} totalCountQuestions={quiz.questionsCount} questionsCounter={questionsCounter}
                        totalTimeInMin={quiz.timeLimitInMin} quizIndex={quizIndex}/>
                <ProgressBar countQuestions={quiz.questionsCount} answeredQuestions={questionsCounter}
                             quizIndex={quizIndex}/>
                {quiz.isFreeAccess ? <Sidebar countQuestions={25} quizIndex={quizIndex} /> : ''}

                <div className={styles.mainBlock} key={questionsCounter}>
                    <Timer timeInSec={10} onFinish={() => {
                        setActive(false)
                    }}/>
                    <QuestionBlock
                        questionsCounter={questionsCounter}
                        quizIndex={quizIndex}
                        countQuestions={quiz.questionsCount}
                        active={active}
                        key={questionsCounter}
                    />
                </div>
            </div>
        </>
    )
}
