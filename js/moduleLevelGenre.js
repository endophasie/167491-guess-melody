import getElementFromTemplate from './getElementFromTemplate.js';
import showScreen from './showScreen.js';
//import moduleResult from './moduleResultFail.js';

export default () => {
const moduleLevelGenreContent = getElementFromTemplate(`
    <h2 class="title">Выберите инди-рок треки</h2>
    <form class="genre">
      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-1">
        <label class="genre-answer-check" for="a-1"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-2">
        <label class="genre-answer-check" for="a-2"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-3">
        <label class="genre-answer-check" for="a-3"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-4">
        <label class="genre-answer-check" for="a-4"></label>
      </div>

      <button class="genre-answer-send" type="submit" disabled="disabled">Ответить</button>
    </form>
`, `main--level main--level-genre`);

const moduleLevelGenre = showScreen(moduleLevelGenreContent);
const btnAnswer = moduleLevelGenre.querySelector(`.genre-answer-send`);
const checkAnswer = moduleLevelGenre.querySelector(`[name=answer]`);

if(checkAnswer.checked) {
  btnAnswer.setAttribute(`disabled`, false);
}

btnAnswer.addEventListener(`click`, () => {
  //moduleResult();
  console.log('clicked')
});

return moduleLevelGenre;

}
