let getElementFromTemplate = (str) => {
  const node = document.querySelector(`.main`);
  node.innerHTML = ``;
  node.innerHTML = str;
  return node;
};

export default getElementFromTemplate;
