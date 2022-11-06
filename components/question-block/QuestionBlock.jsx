import style from './QuestionBlock.module.scss'
import {RadioButton} from "../buttons/RadioButton";
import {AnswerButton} from "../buttons/AnswerButton";
import {useState} from "react";
import data from "../../mock";
import SkipButton from "../buttons/SkipButton";
import {useRouter} from "next/router";
import {setQuizScore} from "../../store/store";
import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';
import {CheckBox} from "../buttons/CheckBox";

export default function QuestionBlock(props) {
    const {questionsCounter, quizIndex, countQuestions, active} = props

    let currentQuestion = {}
    data.quiz[quizIndex].questions.forEach((question) => {
        if (question.id == questionsCounter) {
            currentQuestion = question
        }
    })

    const [answers, setAnswers] = useState([false, false, false, false])
    const [disableBtn, setDisableBtn] = useState(true)
    const router = useRouter()

    const onClickAnswerHandler = (id) => {
        setAnswers(answers.map((elem, index) => {
            return id === index
        }))

        setDisableBtn(false)
    }

    const onClickCheckboxAnswerHandler = (id) => {
        setAnswers(answers.map((elem, index) => {
            if (id === index) {
                return elem = !elem
            }
            return elem
        }))

        setDisableBtn(false)
    }

    const onAnswerButtonClickHandler = async () => {
        let correctAnswersIndex = []
        currentQuestion.answers.map((el, index) => {
            correctAnswersIndex.push(el.isCorrect)
        })
        const isAddPoint = answers.every((elem, index) => {
            return elem === correctAnswersIndex[index]
        })
        setQuizScore(isAddPoint)

        if (questionsCounter < countQuestions) {
            await router.push(`/quiz/${quizIndex}/answer/${parseInt(questionsCounter) + 1}`)
        } else {
            await router.push(`/quiz/result`)
        }

    }

    const onSkipButtonClickHandler = async () => {
        if (questionsCounter < countQuestions) {
            await router.push(`/quiz/${quizIndex}/answer/${parseInt(questionsCounter) + 1}`)
        }

        if (questionsCounter == countQuestions) {
            await router.push(`/quiz/result`)
        }
    }


    return (
        <div className={style.block} key={questionsCounter}>
            <div className={style.block_header}>
                {currentQuestion.pictureSrc !== null ?
                    <img className={style.picture} src={currentQuestion.pictureSrc} alt={'picture'}/>
                    : ''
                }
                {currentQuestion.audioSrc !== null ?
                    <AudioPlayer
                        className={style.audio}
                        src={currentQuestion.audioSrc}
                        onPlay={e => console.log("onPlay")}
                        // other props here
                        showSkipControls={false}
                        showFilledVolume={true}
                        showJumpControls={false}
                    />
                    : ''
                }

                {currentQuestion.text}

            </div>
            <div className={style.block_answers}>
                {currentQuestion.mode == 'radio' ?
                    currentQuestion.answers.map((answer, index) => {
                        return <RadioButton onClick={() => onClickAnswerHandler(index)}
                                            text={answer.text}
                                            key={answer.id}
                                            id={answer.id}
                                            isCorrect={answer.isCorrect}
                                            selected={answers[index]}/>
                    })
                    : currentQuestion.answers.map((answer, index) => {
                        return <CheckBox onClick={() => onClickCheckboxAnswerHandler(index)}
                                         text={answer.text}
                                         id={answer.id}
                                         key={answer.id}
                                         isCorrect={answer.isCorrect}
                                         selected={answers[index]}/>
                    })
                }
            </div>
            <div className={style.block_btns}>
                <SkipButton onClick={onSkipButtonClickHandler}/>
                <AnswerButton text={'ответить'} isDisabled={disableBtn || !active} id={'answeredBtn'}
                              onClick={onAnswerButtonClickHandler}/>
            </div>
        </div>
    )
}
