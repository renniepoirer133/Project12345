function randomJsCode() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const randomString = "abcdefghijklmnopqrstuvwxyz".split("")[randomNumber];
  return `const ${randomString} = () => { console.log("Hello, World!"); };`;
}
