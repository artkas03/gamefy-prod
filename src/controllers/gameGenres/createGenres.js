import createManyGameGenresWithData from "@/services/gameGenres/createManyGameGenresWithData";

const genresCreate = async (genresArray) => {
  return createManyGameGenresWithData(genresArray);
}

export default genresCreate;