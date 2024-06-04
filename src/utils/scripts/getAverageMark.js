const getAverageMark = (markList) => {
  const {
    markingRaw,
    total
  } = markList;

  if (total === 0 || !markingRaw) return 0;

  const totalMarkSum = Object.entries(markingRaw).reduce((acc, currentMark) => acc + currentMark[0] * currentMark[1], 0);

  return (totalMarkSum / total).toFixed(1);
}

export default getAverageMark;