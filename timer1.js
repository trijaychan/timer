let times = process.argv.slice(2);

times = times.filter(x => x == Number(x));
times = times.map(x => Number(x));
times = times.filter(x => x > 0);
times.sort((a, b) => {
  let returning =  0;

  a < b ? returning = -1 : null;
  a > b ? returning = 1 : null;

  return returning;
});

for (let time of times) {
  setTimeout(() => {
    process.stdout.write(".");
  }, 1000 * time);
}

setTimeout(() => {
  process.stdout.write("\n");
}, 1001 * times[times.length - 1]);