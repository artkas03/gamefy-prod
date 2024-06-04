import countGamesStartsWithQuery from "@/services/games/countGamesStartsWithQuery";

const countGames = async(query) => {
  return countGamesStartsWithQuery(query);
}

export default countGames;