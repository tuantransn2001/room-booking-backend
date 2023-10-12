/*
  Warnings:

  - Added the required column `guestId` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reservation" ADD COLUMN     "guestId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Guest" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "details" TEXT NOT NULL,

    CONSTRAINT "Guest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvoiceGuest" (
    "id" SERIAL NOT NULL,
    "invoiceAmount" TEXT NOT NULL,
    "ts_issued" TIMESTAMP(3) NOT NULL,
    "ts_paid" TIMESTAMP(3) NOT NULL,
    "ts_cancel" TIMESTAMP(3) NOT NULL,
    "reservationId" INTEGER NOT NULL,
    "guestId" INTEGER NOT NULL,

    CONSTRAINT "InvoiceGuest_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "Guest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvoiceGuest" ADD CONSTRAINT "InvoiceGuest_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvoiceGuest" ADD CONSTRAINT "InvoiceGuest_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "Guest"("id") ON DELETE CASCADE ON UPDATE CASCADE;
