import { Footer } from '@/components/Footer';
import { HomepageSlider } from '@/components/HomepageSlider';
import { SidebarBurger } from '@/components/Sidebar/SidebarBurger';
import { GameCatalogHOC } from '@/hocs/GameCatalogHOC';
import { HeaderBar } from '@/components/HeaderBar';
import { SidebarMobileBurger } from '@/components/Sidebar/SidebarMobileBurger';
import { getServerSession } from 'next-auth';
import axiosInstance from '@/utils/scripts/api';

const useGetUserData = async(email) => {
  if (!email) return null;

  try {
    const searchParams = new URLSearchParams();

    searchParams.append('email', email);
    
    const {
      data: { userData }
    } = await axiosInstance.get(`/users/getFullUserInfo?${searchParams.toString()}`);

    return userData;
  } catch(err) {
    console.error(err)
    return;
  }
}

export default async function Home() {
  const session = await getServerSession();
  const userData = await useGetUserData(session?.user?.email);

  return (
    <main id='main-container' className="grid general-wrapper">
      <div className="homepage grid">
        <HomepageSlider userData={userData} />

        <div className="homepage__game-catalog">
          <GameCatalogHOC title={'Games'} userCollectionData={userData} />
        </div>

        <Footer />
        <HeaderBar />
      </div>

      {/* <SidebarBurger />
      <SidebarMobileBurger /> */}
    </main>
  );
}
