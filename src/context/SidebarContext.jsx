const { createContext, useState } = require("react");

export const SidebarContext = createContext();

export const SidebarContextProvider = ({ children }) => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const [activeGenre, setActiveGenre] = useState('All');
  const [gamesLength, setGamesLength] = useState(0);

  const value = {
    isSidebarOpened,
    setIsSidebarOpened,
    activeGenre,
    setActiveGenre,
    gamesLength,
    setGamesLength
  }

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
}