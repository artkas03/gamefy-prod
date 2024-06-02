export const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1056 };

export const GAMES_IN_PAGE = 12;

export const gamesList = [];

export const userContextMenu = [
  {
    id: 0,
    title: 'My Collection',
    getLink: (username) => `/profile/${username}`
  }
]

for (let i = 0; i < 13; i++) {
  const newGame = {
    id: i,
    genre: 'rpg',
    name: `Fallout ${i}`,
    companyName: 'Naughty dogs',
    mark: `4.${Math.round((i * i + 1) / 2)}`,
  };

  newGame.slug = newGame.name.toLocaleLowerCase().replaceAll(' ', '-');

  gamesList.push(newGame);
}