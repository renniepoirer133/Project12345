function randomFunction() {
  // Randomly generate and execute JavaScript code
  const code = `console.log("Hello World!");`;
  exec(code, (error, stdout, stderr) => {
    if (error) console.error(`Error: ${stderr}`);
    else if (!stdout) return; // Exit immediately after executing the code
    console.log(stdout.trim());
  });
}
