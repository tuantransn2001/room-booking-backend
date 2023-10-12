-- CreateTable
CREATE TABLE "InvoiceCompany" (
    "id" SERIAL NOT NULL,
    "invoiceAmount" TEXT NOT NULL,
    "invoicePeriod" TEXT NOT NULL,
    "invoiceDetails" TEXT NOT NULL,
    "ts_issued" TIMESTAMP(3) NOT NULL,
    "ts_paid" TIMESTAMP(3) NOT NULL,
    "ts_cancel" TIMESTAMP(3) NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "InvoiceCompany_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InvoiceCompany" ADD CONSTRAINT "InvoiceCompany_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;
