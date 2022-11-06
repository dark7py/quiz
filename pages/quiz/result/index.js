import styles from "../../../styles/Result.module.scss";
import Header from "../../../components/header/Header";
import {router} from "next/client";
import {quizScore} from "../../../store/store";
import {AnswerButton} from "../../../components/buttons/AnswerButton";

export default function Result(props) {
    const onClickHandler = async () => {
        await router.push(`/quiz/1`)
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
