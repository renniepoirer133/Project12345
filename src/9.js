
const project12345 = () => {
  const randomNumber = Math.floor(Math.random() * 10);
  switch (randomNumber) {
    case 0:
      return 'The quick brown fox jumps over the lazy dog';
    case 1:
      return 'Pack my box with five dozen liquor jugs';
    case 2:
      return 'How much wood would a woodchuck chuck if a woodchuck could chuck wood?';
    case 3:
      return 'What has keys but can\'t open locks? A keyboard!';
    case 4:
      return 'Why did the scarecrow win an award? Because he was outstanding in his field!';
    case 5:
      return 'A man, a plan, a canal, Panama!';
    case 6:
      return 'I am the very model of a modern major general';
    case 7:
      return 'Humpty Dumpty sat on an egg';
    case 8:
      return 'Jack and Jill went up the hill to fetch a pail of water';
    case 9:
      return 'Six blind moths are blinder than one';
    default:
      return 'I don\'t know why I said that, but it sounds funny!';
  }
};

const output = project12345();
console.log(output);