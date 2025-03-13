function getRandomJsCode() {
  let randNum = Math.floor(Math.random() * 10) + 1;
  let randBool = Math.random() > 0.5;
  return `${randNum} ${randBool}`;
}