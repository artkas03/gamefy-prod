import { ProfilePreview } from "../components/ProfilePreview/ProfilePreview";
import { UserCollection } from "./components/UserColletion/UserCollection";
import axiosInstance from "@/utils/scripts/api";

import './styles.scss';
import { UserpageSlider } from "./components/UserpageSlider/UserpageSlider";
import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";

const useGetUserData = async(username) => {
  try {
    const searchParams = new URLSearchParams();

    searchParams.append('username', username);
    
    const {
      data: { userData }
    } = await axiosInstance.get(`/users/getFullUserInfo?${searchParams.toString()}`);

    return userData;
  } catch(err) {
    console.error(err)
    return;
  }
} 

export default async function Username({ params }) {
  const userData = await useGetUserData(params.username);
  const session = await getServerSession();

  if (!session?.user) {
    notFound();
  }

  return (
    <div className="grid userpage">
      <UserpageSlider />

      <ProfilePreview
        username={params.username}
      />

      <div className="userpage__collection-wrapper">
        <UserCollection userCollectionData={userData?.collection} />
      </div>
    </div>
  );
}