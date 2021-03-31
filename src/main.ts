import { Game } from "./game";
import { IAnswer } from "./interfaces";
import { levels } from "./data";

const colors = require('colors');
const readlineSync = require('readline-sync');

const startGame = (): void => {
  const game = new Game();
  game.userName = readlineSync.question('Enter your name: ');
  console.log(`Привет, ${game.userName} ! Ответь на 3 вопроса - и узнай сможешь ли ты стать новым президентом страны :)`);

  for (let level of levels) {
    const title = level.title;
    const question = level.question;
    console.log('\n');
    console.log(title);
    console.log(question);
    for (let answer of level.answers) {
      const answerNumber = answer.number;
      const answerText = answer.answer;
      console.log(`${answerNumber}. ${answerText}`);
    }
    let isCorrectAnswer = false;
    let existedAnswer;
    while (isCorrectAnswer === false) {
      const userAnswer = +readlineSync.question('Enter the number of your answer and press "Enter": ');
      existedAnswer = level.answers.filter((answer: IAnswer) => answer.number === userAnswer).pop();
      isCorrectAnswer = existedAnswer ? true : false;
    }
    game.addPoints(existedAnswer.points);
  }

  console.log('\n');
  const finishPoints = game.getPoints();
  if (finishPoints >= game.pointsToWin) {
    console.log(colors.green.bold('Вы набрали нужное количество очков и выиграли выборы! Поздравляем!'));
  } else {
    console.log(colors.red.bold('Вы не набрали нужное количество очков и проиграли выборы!'));
  }

}

startGame();
