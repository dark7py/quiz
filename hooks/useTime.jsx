import {useState} from "react";

const useTime = (isResultPage, totalTimeInMin) => {
    if (isResultPage) {
        return ''
    } else {
        const totalTimeInSec = totalTimeInMin * 60
        const [time, setTime] = useState(totalTimeInSec)

        let timer = setTimeout(() => {
            if (time > 0) {
                setTime(time - 1)
            }
        }, 1000)

        const timeInMin = new Date(time * 1000).toISOString().substring(14, 19)

        return timeInMin
    }
}

export default useTime;
