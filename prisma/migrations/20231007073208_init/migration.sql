-- AlterTable
ALTER TABLE "User" ALTER COLUMN "userType" DROP NOT NULL,
ALTER COLUMN "userType" SET DEFAULT '1';