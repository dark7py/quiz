const data = {
    questionsCount: 3,
    questions: [
        {
            id: 1,
            text: 'Объединение Новгорода и Киева состоялось в',
            pictureSrc: null,
            audioSrc: null,
            answers: [
                {
                    id: 1,
                    text: '882 г.',
                    isCorrect: true,
                },
                {
                    id: 2,
                    text: '879 г.',
                    isCorrect: false,
                },
                {
                    id: 3,
                    text: '912 г.',
                    isCorrect: false,
                },
                {
                    id: 4,
                    text: '850 г.',
                    isCorrect: false,
                },
            ]
        },

        {
            id: 2,
            text: 'Как называлась главная торговая артерия, проходившая через территорию Восточно-Европейской равнины в VII - XII вв.?',
            pictureSrc: '/pictureExample.png',
            audioSrc: '/audioExample.mp3',
            answers: [
                {
                    id: 1,
                    text: 'Великий шелковый путь',
                    isCorrect: false,
                },
                {
                    id: 2,
                    text: 'Путь из Варяг в Греки',
                    isCorrect: true,
                },
                {
                    id: 3,
                    text: 'Линия розы',
                    isCorrect: false,
                },
                {
                    id: 4,
                    text: 'торговая линия',
                    isCorrect: false,
                },
            ]
        },

        {
            id: 3,
            text: 'В какие годы правила княгиня Ольга?',
            pictureSrc: null,
            audioSrc: '/audioExample.mp3',
            answers: [
                {
                    id: 1,
                    text: '969-971 гг.',
                    isCorrect: false,
                },
                {
                    id: 2,
                    text: '945-957 гг',
                    isCorrect: true,
                },
                {
                    id: 3,
                    text: '913-945 гг',
                    isCorrect: false,
                },
                {
                    id: 4,
                    text: '934-944 гг',
                    isCorrect: false,
                },
            ]
        }
    ]
}

export default data;

