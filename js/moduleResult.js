import getElementFromTemplate from './getElementFromTemplate.js';
import showScreen from './showScreen.js';
import moduleWelcome from './moduleWelcome.js';

const resultScreen = [
  `<section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">Вы проиграли</h2>
    <div class="main-stat">Ничего, вам повезет в следующий раз</div>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>`,
    `<section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали 4&nbsp;мелодии</div>
    <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>`
];

const random = () => {
  return Math.floor(Math.random() * 2) + 1;  
};

export default () => {
  const moduleResultContent = getElementFromTemplate(resultScreen[random()], `main--result`);
  const moduleResult = showScreen(moduleResultContent);
  const btnReplay = moduleResult.querySelector(`.main-replay`);

  btnReplay.addEventListener(`click`, () => {
    moduleWelcome();
  });

  return moduleResult;
}
