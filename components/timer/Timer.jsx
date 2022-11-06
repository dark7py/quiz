import styles from './Timer.module.scss'
import {CountdownCircleTimer} from "react-countdown-circle-timer";
import {useEffect} from "react";

export default function Timer(props) {
    const {timeInSec, key, onFinish} = props


    // useEffect(() => {
    //
    //     setTimeout(() => {
    //         document.getElementById('answeredBtn').isDisabled = true
    //     }, timeInSec * 1000)
    // }, [timeInSec])

    const children = ({remainingTime}) => {
        const minutes = Math.floor(remainingTime / 60)
        const seconds = remainingTime % 60

        return (
            <div className={styles.timer}>{minutes}:{seconds}</div>
        )
    }

    return (
        <>
            <div className={styles.progressBar} >
                <CountdownCircleTimer
                    isPlaying={true}
                    duration={timeInSec}
                    colors={'#00EAD9'}
                    strokeWidth={2}
                    size={120}
                    trailColor={'#FFF'}
                    onComplete={onFinish}
                >
                    {({remainingTime}) => children({remainingTime})}
                </CountdownCircleTimer>
            </div>
        </>
    )
}
