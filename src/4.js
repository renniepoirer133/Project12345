const Project12345 = () => {
  const generateRandomCode = () => {
    let code = '';
    for (let i = 0; i < 5; i++) {
      code += Math.floor(Math.random() * 10);
    }
    return code;
  };
  return generateRandomCode();
};
