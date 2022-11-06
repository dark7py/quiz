const data = {
    quiz: [
        {
            name: 'Русь и золотая орда',
            id: 0,
            timeLimitInMin: 5,
            isFreeAccess: true,
            questionsCount: 3,
            questions: [
                {
                    id: 1,
                    text: 'Объединение Новгорода и Киева состоялось в',
                    pictureSrc: null,
                    audioSrc: null,
                    mode: 'radio',
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
                    mode: 'radio',
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
                    mode: 'radio',
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
            ],
        },

        {
            name: 'Quiz 2',
            id: 1,
            timeLimitInMin: 10,
            isFreeAccess: false,
            questionsCount: 3,
            questions: [
                {
                    id: 1,
                    text: 'Какие компании основаны в США?',
                    pictureSrc: null,
                    audioSrc: null,
                    mode: 'checkbox',
                    answers: [
                        {
                            id: 1,
                            text: 'Google',
                            isCorrect: true,
                        },
                        {
                            id: 2,
                            text: 'Microsoft',
                            isCorrect: true,
                        },
                        {
                            id: 3,
                            text: 'Samsung',
                            isCorrect: false,
                        },
                        {
                            id: 4,
                            text: 'Sony',
                            isCorrect: false,
                        },
                    ]
                },

                {
                    id: 2,
                    text: 'Кто владелец Tesla?',
                    pictureSrc: 'https://placeimg.com/600/400/arch',
                    audioSrc: '/audioExample.mp3',
                    mode: 'radio',
                    answers: [
                        {
                            id: 1,
                            text: 'Билл Гейтс',
                            isCorrect: false,
                        },
                        {
                            id: 2,
                            text: 'Илон Маск',
                            isCorrect: true,
                        },
                        {
                            id: 3,
                            text: 'Мерседес',
                            isCorrect: false,
                        },
                        {
                            id: 4,
                            text: 'Джефф Безос',
                            isCorrect: false,
                        },
                    ]
                },

                {
                    id: 3,
                    text: 'Какие страны находятся в Европе',
                    pictureSrc: null,
                    audioSrc: '/audioExample.mp3',
                    mode: 'checkbox',
                    answers: [
                        {
                            id: 1,
                            text: 'Чехия',
                            isCorrect: true,
                        },
                        {
                            id: 2,
                            text: 'Ватикан',
                            isCorrect: true,
                        },
                        {
                            id: 3,
                            text: 'Казахстан',
                            isCorrect: false,
                        },
                        {
                            id: 4,
                            text: 'Панама',
                            isCorrect: false,
                        },
                    ]
                }
            ],
        }
    ],
}

export default data;

