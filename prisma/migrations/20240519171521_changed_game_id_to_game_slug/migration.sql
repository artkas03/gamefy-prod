/*
  Warnings:

  - You are about to drop the column `gameId` on the `UserScore` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[gameSlug]` on the table `UserScore` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `gameSlug` to the `UserScore` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserScore" DROP CONSTRAINT "UserScore_gameId_fkey";

-- DropIndex
DROP INDEX "UserScore_gameId_key";

-- AlterTable
ALTER TABLE "UserScore" DROP COLUMN "gameId",
ADD COLUMN     "gameSlug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserScore_gameSlug_key" ON "UserScore"("gameSlug");

-- AddForeignKey
ALTER TABLE "UserScore" ADD CONSTRAINT "UserScore_gameSlug_fkey" FOREIGN KEY ("gameSlug") REFERENCES "Game"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;
