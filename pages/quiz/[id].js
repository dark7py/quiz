import Header from "../../components/header/Header";
import QuestionBlock from "../../components/question-block/QuestionBlock";
import ProgressBar from "../../components/progress-bar/ProgressBar";
import Timer from "../../components/timer/Timer";
import styles from "../../styles/Quiz.module.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import {useEffect, useState} from "react";

export const getServerSideProps = (context) => {
    const {id} = context.params
    console.log(context.params);

    return {
        props: {questionsCounter: id}
    }
}

export default function Id({questionsCounter}) {
    const [active, setActive] = useState(true)

    useEffect(() => {
        setActive(true)
    }, [questionsCounter])

    return (
        <>
            <div className={styles.body}>
                <Header text={'РУСЬ И ЗОЛОТАЯ ОРДА'} totalCountQuestions={3} questionsCounter={questionsCounter}
                        totalTimeInSec={300}/>
                <ProgressBar countQuestions={3} answeredQuestions={questionsCounter}/>
                <Sidebar countQuestions={25}/>

                <div className={styles.mainBlock} key={questionsCounter}>
                    <Timer timeInSec={10} onFinish={() => {
                        setActive(false)
                    }}/>
                    <QuestionBlock
                        questionsCounter={questionsCounter}
                        countQuestions={3}
                        active={active}
                        key={questionsCounter}
                    />
                </div>
            </div>

            {/*<CheckBox text={'checkbox'} selected={false} id={1}/>*/}
            {/*<CheckBox text={'1234'} selected={true} id={2}/>*/}
            {/*<CheckBox text={'qwerty'} isDisabled={true} selected={false} id={3}/>*/}
            {/*<CheckBox text={'sfajsdfjajdfj'} selected={false} id={4}/>*/}

        </>

    )
}
