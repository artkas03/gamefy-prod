-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "description" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "platforms" TEXT[],
ADD COLUMN     "releaseDate" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "subtitlesLanguages" TEXT[],
ADD COLUMN     "voiceLanguages" TEXT[];

-- CreateTable
CREATE TABLE "UserScore" (
    "id" SERIAL NOT NULL,
    "gameId" INTEGER NOT NULL,
    "mark_1" INTEGER NOT NULL DEFAULT 0,
    "mark_2" INTEGER NOT NULL DEFAULT 0,
    "mark_3" INTEGER NOT NULL DEFAULT 0,
    "mark_4" INTEGER NOT NULL DEFAULT 0,
    "mark_5" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "UserScore_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserScore_gameId_key" ON "UserScore"("gameId");

-- AddForeignKey
ALTER TABLE "UserScore" ADD CONSTRAINT "UserScore_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
