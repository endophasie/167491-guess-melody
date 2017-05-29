const screens = [
  `.main--welcome`,
  `.main--level.main--level-genre`,
  `.main--level.main--level-artist`,
  `.main--result`
];

const mainContainer = document.querySelector(`.main`);
const tmpl = document.querySelector(`#templates`);

const KEY = {
  BASE: 18,
  FORWARD: 39,
  BACK: 37
}

let activeScreen = 0;

let showScreen = function (num) {
  let fragment = document.createDocumentFragment();
  let screenContent = tmpl.content.querySelector(screens[num]);
  let screen = screenContent.cloneNode(true);

  mainContainer.innerHTML = ``;
  fragment.appendChild(screen);
  mainContainer.appendChild(fragment);
};

showScreen(activeScreen);

document.addEventListener(`keydown`, function (event) {
  switch (event.keyCode) {
    case KEY.BASE && KEY.BACK:
      activeScreen = Math.max(activeScreen - 1, 0);
      showScreen(activeScreen);
      break;
    case KEY.BASE && KEY.FORWARD:
      activeScreen = Math.min(activeScreen + 1, screens.length - 1);
      showScreen(activeScreen);
      break;
  }
});
