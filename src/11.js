const getRandomCode = () => {
  let result;
  while(true) {
    result = Math.floor(Math.random() * 1000);
    if (result < 100 || result > 999) break;
  }
  return result;
}
