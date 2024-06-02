const formatUserScore = (userScore) => {
  return {
    markingRaw: {
      1: userScore.markOne.length,
      2: userScore.markTwo.length,
      3: userScore.markThree.length,
      4: userScore.markFour.length,
      5: userScore.markFive.length,
    },
    total: Object.entries(userScore).reduce((acc, entry) => acc + entry[1].length, 0),
  }
}

export default formatUserScore;