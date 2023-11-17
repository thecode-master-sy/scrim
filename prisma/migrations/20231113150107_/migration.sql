/*
  Warnings:

  - Added the required column `theme` to the `UserPreferences` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserPreferences" ADD COLUMN     "emailUpdates" BOOLEAN DEFAULT false,
ADD COLUMN     "theme" TEXT NOT NULL;
