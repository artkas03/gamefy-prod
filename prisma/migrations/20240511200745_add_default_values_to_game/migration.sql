-- AlterTable
ALTER TABLE "Game" ALTER COLUMN "platforms" SET DEFAULT ARRAY['PC', 'PS5']::TEXT[],
ALTER COLUMN "subtitlesLanguages" SET DEFAULT ARRAY['English', 'Ukrainian']::TEXT[],
ALTER COLUMN "voiceLanguages" SET DEFAULT ARRAY['English', 'Ukrainian']::TEXT[];
