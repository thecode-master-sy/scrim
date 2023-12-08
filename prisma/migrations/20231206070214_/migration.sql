/*
  Warnings:

  - You are about to drop the column `platform` on the `Scrim` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Scrim" DROP COLUMN "platform",
ADD COLUMN     "categories" TEXT[];
