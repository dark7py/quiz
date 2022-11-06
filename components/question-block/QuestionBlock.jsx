import style from './QuestionBlock.module.scss'
import {RadioButton} from "../buttons/RadioButton";
import {AnswerButton} from "../buttons/AnswerButton";
import {useState} from "react";
import data from "../../mock";
import SkipButton from "../buttons/SkipButton";
import {useRouter} from "next/router";
import Image from "next/Image"
import {quizScore, setQuizScore} from "../../store/store";
import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';

export default function QuestionBlock(props) {
    const {questionsCounter, countQuestions, active} = props

    let currentQuestion = {}
    data.questions.forEach((question) => {
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

    const onAnswerButtonClickHandler = async () => {
        const selectedAnswerId = answers.indexOf(true)

        setQuizScore(currentQuestion.answers[selectedAnswerId].isCorrect)


        if (questionsCounter < countQuestions) {
            await router.push(`/quiz/${parseInt(questionsCounter) + 1}`)
        } else {
            await router.push(`/quiz/result`)
        }

    }

    const onSkipButtonClickHandler = async () => {
        if (questionsCounter < countQuestions) {
            await router.push(`/quiz/${parseInt(questionsCounter) + 1}`)
        }

        if (questionsCounter == countQuestions) {
            await router.push(`/quiz/result`)
        }
    }


    return (
        <div className={style.block} id={currentQuestion.id} key={questionsCounter} >
            <div className={style.block_header}>
                {currentQuestion.pictureSrc !== null ?
                    <img className={style.picture} src={currentQuestion.pictureSrc} alt={'picture'} />
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
                {currentQuestion.answers.map((answer, index) => {
                    return <RadioButton onClick={() => onClickAnswerHandler(index)}
                                        text={answer.text}
                                        id={answer.id}
                                        isCorrect={answer.isCorrect}
                                        selected={answers[index]}/>
                })}
            </div>
            <div className={style.block_btns}>
                <SkipButton onClick={onSkipButtonClickHandler}/>
                <AnswerButton text={'ответить'} isDisabled={disableBtn || !active} id={'answeredBtn'}
                              onClick={onAnswerButtonClickHandler} />
            </div>
        </div>
    )
}
