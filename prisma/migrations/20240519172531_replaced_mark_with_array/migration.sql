/*
  Warnings:

  - The `markFive` column on the `UserScore` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `markFour` column on the `UserScore` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `markOne` column on the `UserScore` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `markThree` column on the `UserScore` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `markTwo` column on the `UserScore` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "UserScore" DROP COLUMN "markFive",
ADD COLUMN     "markFive" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
DROP COLUMN "markFour",
ADD COLUMN     "markFour" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
DROP COLUMN "markOne",
ADD COLUMN     "markOne" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
DROP COLUMN "markThree",
ADD COLUMN     "markThree" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
DROP COLUMN "markTwo",
ADD COLUMN     "markTwo" INTEGER[] DEFAULT ARRAY[]::INTEGER[];
