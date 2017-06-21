import getElementFromTemplate from './getElementFromTemplate.js';
import showScreen from './showScreen.js';
import moduleLevelArtist from './moduleLevelArtist.js';

export default () => {
const moduleWelcomeContent = getElementFromTemplate(`
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;2 минуты дать
      максимальное количество правильных ответов.<br>
      Удачи!
    </p>
`, `main--welcome`);

const moduleWelcome = showScreen(moduleWelcomeContent);

const btnStart = moduleWelcome.querySelector(`.main-play`);

btnStart.addEventListener(`click`, () => {
console.log(moduleLevelArtist())
  moduleLevelArtist();
});

  return moduleWelcome;
}
