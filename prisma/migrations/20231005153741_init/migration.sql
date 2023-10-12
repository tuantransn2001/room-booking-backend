-- CreateTable
CREATE TABLE "Chanel" (
    "id" SERIAL NOT NULL,
    "chanelName" TEXT NOT NULL,
    "details" TEXT NOT NULL,

    CONSTRAINT "Chanel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChanelUsed" (
    "id" SERIAL NOT NULL,
    "roomId" INTEGER NOT NULL,
    "chanelId" INTEGER NOT NULL,

    CONSTRAINT "ChanelUsed_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ChanelUsed_roomId_key" ON "ChanelUsed"("roomId");

-- AddForeignKey
ALTER TABLE "ChanelUsed" ADD CONSTRAINT "ChanelUsed_chanelId_fkey" FOREIGN KEY ("chanelId") REFERENCES "Chanel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
