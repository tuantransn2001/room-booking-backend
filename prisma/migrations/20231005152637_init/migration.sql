-- CreateTable
CREATE TABLE "CompanyPlanStatusEvent" (
    "id" SERIAL NOT NULL,
    "companyPlanId" INTEGER NOT NULL,
    "companyPlanStatusCatalogId" INTEGER NOT NULL,

    CONSTRAINT "CompanyPlanStatusEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanyPlanStatusCatalog" (
    "id" SERIAL NOT NULL,
    "statusName" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,

    CONSTRAINT "CompanyPlanStatusCatalog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CompanyPlanStatusEvent" ADD CONSTRAINT "CompanyPlanStatusEvent_companyPlanId_fkey" FOREIGN KEY ("companyPlanId") REFERENCES "CompanyPlan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyPlanStatusEvent" ADD CONSTRAINT "CompanyPlanStatusEvent_companyPlanStatusCatalogId_fkey" FOREIGN KEY ("companyPlanStatusCatalogId") REFERENCES "CompanyPlanStatusCatalog"("id") ON DELETE CASCADE ON UPDATE CASCADE;
