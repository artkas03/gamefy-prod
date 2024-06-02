/*
  Warnings:

  - You are about to drop the column `A` on the `_GameToGenre` table. All the data in the column will be lost.
  - You are about to drop the column `B` on the `_GameToGenre` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[gameId,genreId]` on the table `_GameToGenre` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `gameId` to the `_GameToGenre` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genreId` to the `_GameToGenre` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_GameToGenre" DROP CONSTRAINT "_GameToGenre_A_fkey";

-- DropForeignKey
ALTER TABLE "_GameToGenre" DROP CONSTRAINT "_GameToGenre_B_fkey";

-- DropIndex
DROP INDEX "_GameToGenre_AB_unique";

-- DropIndex
DROP INDEX "_GameToGenre_B_index";

-- AlterTable
ALTER TABLE "_GameToGenre" DROP COLUMN "A",
DROP COLUMN "B",
ADD COLUMN     "gameId" INTEGER NOT NULL,
ADD COLUMN     "genreId" INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX "_GameToGenre_B_index" ON "_GameToGenre"("genreId");

-- CreateIndex
CREATE UNIQUE INDEX "_GameToGenre_AB_unique" ON "_GameToGenre"("gameId", "genreId");

-- AddForeignKey
ALTER TABLE "_GameToGenre" ADD CONSTRAINT "_GameToGenre_A_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToGenre" ADD CONSTRAINT "_GameToGenre_B_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;
