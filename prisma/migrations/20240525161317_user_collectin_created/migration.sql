-- CreateTable
CREATE TABLE "UserCollection" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "inProgress" INTEGER[],
    "favorite" INTEGER[],
    "finished" INTEGER[],
    "planning" INTEGER[],
    "dropped" INTEGER[],
    "postponed" INTEGER[],

    CONSTRAINT "UserCollection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserCollection_userId_key" ON "UserCollection"("userId");

-- AddForeignKey
ALTER TABLE "UserCollection" ADD CONSTRAINT "UserCollection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
