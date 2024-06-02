/*
  Warnings:

  - You are about to drop the column `mark_1` on the `UserScore` table. All the data in the column will be lost.
  - You are about to drop the column `mark_2` on the `UserScore` table. All the data in the column will be lost.
  - You are about to drop the column `mark_3` on the `UserScore` table. All the data in the column will be lost.
  - You are about to drop the column `mark_4` on the `UserScore` table. All the data in the column will be lost.
  - You are about to drop the column `mark_5` on the `UserScore` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserScore" DROP COLUMN "mark_1",
DROP COLUMN "mark_2",
DROP COLUMN "mark_3",
DROP COLUMN "mark_4",
DROP COLUMN "mark_5",
ADD COLUMN     "markFive" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "markFour" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "markOne" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "markThree" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "markTwo" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "gameId" INTEGER NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Comment_gameId_key" ON "Comment"("gameId");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
