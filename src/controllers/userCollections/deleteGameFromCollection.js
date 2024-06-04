import getGameBySlug from "@/services/games/getGameBySlug";
import createUserCollection from "@/services/userCollections/createUserCollection";
import getUserCollection from "@/services/userCollections/getUserCollection";
import updateGameToCollection from "@/services/userCollections/updateGameCollection";
import getUserByEmail from "@/services/users/getUserByEmail";

const deleteGameFromCollection = async(params) => {
  const {
    gameSlug,
    userEmail,
    currentCollection
  } = params;

  const [{id: gameId}, {id: userId}] = await Promise.all([
    getGameBySlug(gameSlug, { fieldsToSelect: ['id'] }),
    getUserByEmail(userEmail, { fieldsToSelect: ['id'] }),
  ]);

  const userCollection = await getUserCollection(userId);

  const options = {
    gameId,
    userId,
    oldCollection: currentCollection,
    oldCollectionValue: userCollection[currentCollection].filter((id) => id !== gameId)
  };

  return updateGameToCollection(options);
}

export default deleteGameFromCollection;