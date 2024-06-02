-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "likesNumber" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "usersIdLiked" INTEGER[];
