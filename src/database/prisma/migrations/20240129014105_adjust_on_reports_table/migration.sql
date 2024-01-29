/*
  Warnings:

  - Added the required column `report_id` to the `financial_records` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `reports` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "financial_records" ADD COLUMN     "report_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "financial_records" ADD CONSTRAINT "financial_records_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("id_e") ON DELETE RESTRICT ON UPDATE CASCADE;
