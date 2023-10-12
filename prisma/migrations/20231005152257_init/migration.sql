-- CreateTable
CREATE TABLE "CompanyPlan" (
    "id" SERIAL NOT NULL,
    "ts_created" TIMESTAMP(3) NOT NULL,
    "ts_activated" TIMESTAMP(3) NOT NULL,
    "ts_deactivated" TIMESTAMP(3) NOT NULL,
    "planId" INTEGER NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "CompanyPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plan" (
    "id" SERIAL NOT NULL,
    "planeName" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "roomMin" INTEGER NOT NULL,
    "roomMax" INTEGER NOT NULL,
    "monthlyPrice" TEXT NOT NULL,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CompanyPlan" ADD CONSTRAINT "CompanyPlan_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyPlan" ADD CONSTRAINT "CompanyPlan_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;
