import React, { FC, useEffect, useState } from "react";


const UseEffectExample = ({ level }) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        // Изменение состояния будет происходить после выполнения всего кода
        // компонента, в том числе рендеринга dom элементов
        // изменение состояния запустит повторное выполнение кода компонента
        // в том числе и рендеринг
        setValue(level + Math.random() * 200);
    }, [level]);

    return (
        <div>
            {value}
        </div>
    );
};

 const UseLayoutEffectExample= ({ level }) => {
    const [value, setValue] = useState(0);

    useLayotEffect(() => {
        // Изменение состояние будет происходить до фазы рендеринга
        // что сделает код более производительным
        setValue(level + Math.random() * 200);
    }, [level]);

    return (
        <div>
            {value}
        </div>
    );
};

export default UseEffectExample
