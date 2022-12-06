import {router} from "next/client";

import Header from "../../../components/header/Header";
import {AnswerButton} from "../../../components/buttons/AnswerButton";

import {quizScore, resetQuizScore} from "../../../store/store";
import styles from "../../../styles/Result.module.scss";


export default function Result() {
    const onClickHandler = async () => {
        resetQuizScore();
        await router.push(`/quiz`)
    }

    return (
        <>
            <Header text={'РУСЬ И ЗОЛОТАЯ ОРДА'} totalCountQuestions={3} questionsCounter={3}/>

            <div className={styles.mainBlock}>
                <h1>Вы прошли тест!</h1>
                <div className={styles.result}>
                    Результат: <span>правильно {quizScore} из 3 </span>
                </div>

                <div className={styles.block}>
                    <p>Пройти ещё раз?</p>
                    <AnswerButton text={'Пройти'} onClick={onClickHandler}/>
                </div>
            </div>
        </>
    )
}
