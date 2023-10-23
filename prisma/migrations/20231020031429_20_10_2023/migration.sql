/*
  Warnings:

  - Changed the type of `postCode` on the `City` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `cityId` to the `Hotel` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `discountPercent` on the `Reservation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "City" DROP COLUMN "postCode",
ADD COLUMN     "postCode" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Hotel" ADD COLUMN     "cityId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "discountPercent",
ADD COLUMN     "discountPercent" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Hotel" ADD CONSTRAINT "Hotel_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE CASCADE ON UPDATE CASCADE;
