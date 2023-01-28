import {router} from "next/client";

import Header from "../../../components/header/Header";
import {AnswerButton} from "../../../components/buttons/AnswerButton";

import {quizScore, resetQuizScore} from "../../../store/store";
import styles from "../../../styles/Result.module.scss";
import {useEffect} from "react";
// import {getResults} from "../../api/getResults";
//
// export const getServerSideProps = async () => {
//     const results = getResults()
//     console.log(results);
//     //delete results._id
//
//     return {
//         props: results
//     }
// }


export default function Result() {
    //console.log(results);
    useEffect(() => {
        fetch("api/getResults", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        }).then(res => console.log(res))
    }, [])

    const onClickHandler = async () => {
        resetQuizScore();
        await router.push(`/quiz`)
    }

    return (
        <>
            <Header text={'РУСЬ И ЗОЛОТАЯ ОРДА'} totalCountQuestions={3} questionsCounter={3} isResultPage={true} />

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
