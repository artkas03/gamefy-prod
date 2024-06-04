import { Footer } from '@/components/Footer';
import { HomepageSlider } from '@/components/HomepageSlider';
import { SidebarBurger } from '@/components/Sidebar/SidebarBurger';
import { GameCatalogHOC } from '@/hocs/GameCatalogHOC';
import { HeaderBar } from '@/components/HeaderBar';

export default async function Home() {
  return (
    <main className="grid general-wrapper">
      <div className="homepage grid">
        <HomepageSlider />

        <div className="homepage__game-catalog">
          <GameCatalogHOC title={'Games'} />
        </div>

        <SidebarBurger />
        <Footer />
        <HeaderBar />
      </div>
    </main>
  );
}
