import { GameCard } from "@/components/GameCard";
import getGames from "../services/getGames";
import { HomepageSlider } from "@/components/HomepageSlider";

export default async function Home() {
  const games = await getGames();
  console.log(games);

  return (
    <main className="homepage grid">
      <HomepageSlider />

      <div className="homepage__game-catalog">
        {games.map((game) => (
          <GameCard
            key={game.id}
            slug={game.slug}
            genres={game.genres}
            name={game.name}
            companyId={game.companyId}
            userScore={game.userScore}
            userCollectionLis={game.userCollectionLis}
          />
        ))}
      </div>
    </main>
  );
}