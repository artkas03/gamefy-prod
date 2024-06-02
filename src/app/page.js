import { GameCard } from "@/components/GameCard";
import getGames from "../services/getGames";
import { HomepageSlider } from "@/components/HomepageSlider";
import { GameCatalogHOC } from "@/hocs/GameCatalogHOC";

export default async function Home() {
  const games = await getGames();

  return (
    <main className="homepage grid">
      <HomepageSlider />

      <div className="homepage__game-catalog">
        <GameCatalogHOC gamesToShow={games} />
      </div>
    </main>
  );
}