const countMarkPercent = (currentMarkNumber, total) => {
  console.log(currentMarkNumber)
  const percentFromTotal = currentMarkNumber / total * 100;
  return percentFromTotal % 1 === 0 ? percentFromTotal : percentFromTotal.toFixed(1);
}

export default countMarkPercent;