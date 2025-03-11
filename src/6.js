const randomNum = Math.floor(Math.random() * 10);
let message;

if (randomNum === 1) {
    message = "Happy Birthday!";
} else if (randomNum === 2) {
    message = "Have a great day!";
} else if (randomNum === 3) {
    message = "I hope you have a wonderful weekend!";
} else if (randomNum === 4) {
    message = "I'm so glad we're friends!";
} else if (randomNum === 5) {
    message = "You're the best person I know!";
} else if (randomNum === 6) {
    message = "I'm so lucky to have you in my life!";
} else if (randomNum === 7) {
    message = "You make my heart sing with joy!";
} else if (randomNum === 8) {
    message = "I can't wait for our next adventure together!";
} else if (randomNum === 9) {
    message = "You're the reason I wake up every day with a smile on my face!";
} else {
    message = "Have an amazing day and know that you have a friend in me!";
}

return message;
