import getGameBySlug from "@/services/games/getGameBySlug";
import createUserCollection from "@/services/userCollections/createUserCollection";
import getUserCollection from "@/services/userCollections/getUserCollection";
import updateGameToCollection from "@/services/userCollections/updateGameCollection";
import getUserByEmail from "@/services/users/getUserByEmail";

const addGameToCollection = async(params) => {
  const {
    gameSlug,
    userEmail,
    oldCollection,
    newCollection
  } = params;

  const [{id: gameId}, {id: userId}] = await Promise.all([
    getGameBySlug(gameSlug, { fieldsToSelect: ['id'] }),
    getUserByEmail(userEmail, { fieldsToSelect: ['id'] }),
  ]);

  const userCollection = await getUserCollection(userId);

  const options = {
    userId,
    newCollection
  };

  if (!userCollection) {
    await createUserCollection(options);

    return;
  }

  options.oldCollection = oldCollection;
  options.oldCollectionValue = userCollection[oldCollection] ? userCollection[oldCollection].filter((gameIdItem) => gameId !== gameIdItem) : [];

  if (userCollection[newCollection]) {
    options.newCollectionValue = userCollection[newCollection].includes(gameId) ? userCollection[newCollection] : [...userCollection[newCollection], gameId];
  } else {
    options.newCollectionValue = [gameId];
  };

  return updateGameToCollection(options);
}

export default addGameToCollection;