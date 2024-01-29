-- CreateEnum
CREATE TYPE "FinancialRecordsTypes" AS ENUM ('INCOME', 'EXPENSE');

-- CreateTable
CREATE TABLE "User" (
    "id_i" SERIAL NOT NULL,
    "id_e" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id_e")
);

-- CreateTable
CREATE TABLE "UserToken" (
    "id_i" SERIAL NOT NULL,
    "id_e" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    "expires_date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserToken_pkey" PRIMARY KEY ("id_e")
);

-- CreateTable
CREATE TABLE "reports" (
    "id_e" TEXT NOT NULL,

    CONSTRAINT "reports_pkey" PRIMARY KEY ("id_e")
);

-- CreateTable
CREATE TABLE "financial_records" (
    "id_e" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "type" "FinancialRecordsTypes" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "financial_records_pkey" PRIMARY KEY ("id_e")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "UserToken" ADD CONSTRAINT "UserToken_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id_e") ON DELETE RESTRICT ON UPDATE CASCADE;
