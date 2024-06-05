const getCollectionGameIn = (gameId, userCollection) => {
  if (!userCollection) {
    return '';
  }

  return Object.entries(userCollection).find(([collection, value]) => {
    if (!Array.isArray(value)) {
      return null;
    }

    if (value.includes(gameId)) {
      return collection;
    }
  })
}

export default getCollectionGameIn;