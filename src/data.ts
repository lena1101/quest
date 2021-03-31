import { ILevel } from "./interfaces";

export const levels: ILevel[] = [
  {
    number: 1,
    title: 'Первый вопрос:',
    question: 'Как можно стать новым президентом?',
    answers: [
      {
        number: 1,
        answer: 'Самостоятельно выдвинуть свою кандидатуру',
        points: 10
      },
      {
        number: 2,
        answer: 'Стать близким другом текущего президента и выдвинуть свою кандидатуру',
        points: 30
      },
      {
        number: 3,
        answer: 'Остаться на посту президента на новый срок',
        points: 35
      }
    ]
  },
  {
    number: 2,
    title: 'Второй вопрос:',
    question: 'На что направить свою предвыборную кампанию?',
    answers: [
      {
        number: 1,
        answer: 'На получение доверия и симпатии избирателей',
        points: 10
      },
      {
        number: 2,
        answer: 'На обещание рая на земле',
        points: 30
      },
      {
        number: 3,
        answer: 'На недопуск остальных кандидатов до выборов',
        points: 35
      }
    ]
  },
  {
    number: 3,
    title: 'Третий вопрос:',
    question: 'Что делать в канун дня выборов?',
    answers: [
      {
        number: 1,
        answer: 'Соблюдать "День тишины"',
        points: 10
      },
      {
        number: 2,
        answer: 'Провести акцию "чёрного" PR против остальных кандидатов',
        points: 30
      },
      {
        number: 3,
        answer: 'Устранить остальных кандидатов',
        points: 35
      }
    ]
  }
];
