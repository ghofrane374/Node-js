let result = 0;
process.argv.slice(2).forEach((element) => {
  result += +element;
});
console.log(result);
