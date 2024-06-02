-- CreateTable
CREATE TABLE "GameRequirements" (
    "id" SERIAL NOT NULL,
    "gameId" INTEGER NOT NULL,
    "minimumPreInfo" TEXT NOT NULL DEFAULT '',
    "minimumOS" TEXT NOT NULL DEFAULT '',
    "minimumProcessor" TEXT NOT NULL DEFAULT '',
    "minimumMemory" TEXT NOT NULL DEFAULT '',
    "minimumGPU" TEXT NOT NULL DEFAULT '',
    "minimumStorage" TEXT NOT NULL DEFAULT '',
    "minimumAdditionalNotes" TEXT NOT NULL DEFAULT '',
    "recommendedPreInfo" TEXT NOT NULL DEFAULT '',
    "recommendedOS" TEXT NOT NULL DEFAULT '',
    "recommendedProcessor" TEXT NOT NULL DEFAULT '',
    "recommendedMemory" TEXT NOT NULL DEFAULT '',
    "recommendedGPU" TEXT NOT NULL DEFAULT '',
    "recommendedStorage" TEXT NOT NULL DEFAULT '',
    "recommendedAdditionalNotes" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "GameRequirements_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GameRequirements_gameId_key" ON "GameRequirements"("gameId");

-- AddForeignKey
ALTER TABLE "GameRequirements" ADD CONSTRAINT "GameRequirements_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
