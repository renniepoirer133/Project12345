// Random JS Code for Project 12345
function getRandomNumber() {
    const num = Math.floor(Math.random() * 10) + 1;
    return num;
}

function getRandomColor() {
    const colors = ['#ff69b4', '#87ceeb', '#dda0dd', '#cda8db'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return color;
}

function getRandomElement() {
    const elements = ['h1', 'h2', 'h3', 'p'];
    const element = elements[Math.floor(Math.random() * elements.length)];
    return element;
}

function generateCode(num) {
    let code = '';
    for (let i = 0; i < num; i++) {
        const element = getRandomElement();
        const color = getRandomColor();
        code += `<${element} style="background-color: ${color};">Hello, World!</${element}>`;
    }
    return code;
}
