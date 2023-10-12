-- CreateTable
CREATE TABLE "ReservationStatusCatalog" (
    "id" SERIAL NOT NULL,
    "statusName" INTEGER NOT NULL,

    CONSTRAINT "ReservationStatusCatalog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReservationStatusEvent" (
    "id" SERIAL NOT NULL,
    "details" TEXT NOT NULL,
    "ts_created" TIMESTAMP(3) NOT NULL,
    "reservationId" INTEGER NOT NULL,
    "reservationStatusCatalogId" INTEGER NOT NULL,

    CONSTRAINT "ReservationStatusEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reservation" (
    "id" SERIAL NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "discountPercent" TEXT NOT NULL,
    "totalPrice" TEXT NOT NULL,
    "ts_created" TIMESTAMP(3) NOT NULL,
    "ts_updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ReservationStatusEvent" ADD CONSTRAINT "ReservationStatusEvent_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReservationStatusEvent" ADD CONSTRAINT "ReservationStatusEvent_reservationStatusCatalogId_fkey" FOREIGN KEY ("reservationStatusCatalogId") REFERENCES "ReservationStatusCatalog"("id") ON DELETE CASCADE ON UPDATE CASCADE;
