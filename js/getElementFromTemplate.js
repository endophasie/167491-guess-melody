let getElementFromTemplate = (str, strName) => {
  const node = document.createElement(`section`);

  node.classList = `main ` + strName;
  node.innerHTML = str;

  return node;
};

export default getElementFromTemplate;
