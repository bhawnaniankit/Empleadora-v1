/*
  Warnings:

  - Added the required column `clientId` to the `Contest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Submition` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contest" ADD COLUMN     "clientId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Submition" ADD COLUMN     "rating" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Contest" ADD CONSTRAINT "Contest_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
