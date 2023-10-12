/*
  Warnings:

  - Added the required column `hotel_name` to the `Hotel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hotel" ADD COLUMN     "hotel_name" TEXT NOT NULL;
