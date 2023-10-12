-- CreateTable
CREATE TABLE "RoomReserved" (
    "id" SERIAL NOT NULL,
    "price" TEXT NOT NULL,
    "reservationId" INTEGER NOT NULL,
    "roomId" INTEGER NOT NULL,

    CONSTRAINT "RoomReserved_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RoomReserved" ADD CONSTRAINT "RoomReserved_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomReserved" ADD CONSTRAINT "RoomReserved_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE CASCADE ON UPDATE CASCADE;
