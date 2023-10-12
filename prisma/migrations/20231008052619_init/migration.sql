/*
  Warnings:

  - The `userType` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('GUEST', 'STAFF', 'MANAGER', 'ADMIN');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "userType",
ADD COLUMN     "userType" "UserType";
