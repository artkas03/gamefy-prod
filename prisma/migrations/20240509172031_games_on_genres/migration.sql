/*
  Warnings:

  - You are about to drop the `_GameToGenre` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_GameToGenre" DROP CONSTRAINT "_GameToGenre_A_fkey";

-- DropForeignKey
ALTER TABLE "_GameToGenre" DROP CONSTRAINT "_GameToGenre_B_fkey";

-- DropTable
DROP TABLE "_GameToGenre";

-- CreateTable
CREATE TABLE "GamesOnGenres" (
    "gameId" INTEGER NOT NULL,
    "genreId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GamesOnGenres_pkey" PRIMARY KEY ("gameId","genreId")
);

-- AddForeignKey
ALTER TABLE "GamesOnGenres" ADD CONSTRAINT "GamesOnGenres_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GamesOnGenres" ADD CONSTRAINT "GamesOnGenres_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
