const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === "b") {
    process.stdout.write("Beep.\n");
  } else if (Number(key) >= 1 && Number(key) <= 9) {
    process.stdout.write("Setting timer for " + key + " seconds...\n");
    setTimeout(() => {
      process.stdout.write("Beep.\n");
    }, key * 1000);
  }else if (key === '\u0003') {
    process.exit();
  }
});