const showScreen = (slide) => {
  const mainElement = document.querySelector(`.app`);
  
  if(mainElement.querySelector(`.main`)) {
    mainElement.querySelector(`.main`).remove();
  }
  
  mainElement.appendChild(slide);

  return mainElement;
};

export default showScreen;
