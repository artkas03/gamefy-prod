import getGameBySlug from "@/services/getGameBySlug";

const helloworld = async(slug) => {
  return getGameBySlug(slug);
}

export default helloworld;