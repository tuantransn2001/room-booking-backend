-- CreateTable
CREATE TABLE "Syncronization" (
    "id" SERIAL NOT NULL,
    "messageSent" TEXT NOT NULL,
    "messageReceived" TEXT NOT NULL,
    "reservationId" INTEGER NOT NULL,
    "chanelId" INTEGER NOT NULL,
    "ts" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Syncronization_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Syncronization" ADD CONSTRAINT "Syncronization_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Syncronization" ADD CONSTRAINT "Syncronization_chanelId_fkey" FOREIGN KEY ("chanelId") REFERENCES "Chanel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
