import {
  TCreateFinancialRecord,
  TCreateFinancialRecordReturn,
} from "@modules/reports/types/TCreateFinancialRecord";
import { IFinancialRecordsRepository } from "../Interfaces/IFinancialRecordsRepository";
import { prisma } from "@src/database/PrismaClient";

class FinancialRecordsRepository implements IFinancialRecordsRepository {
  async createFinancialRecord({
    FinancialRecordsType,
    value,
    description,
    reportId,
  }: TCreateFinancialRecord): Promise<TCreateFinancialRecordReturn> {
    const newFinancialRecord = await prisma.financialRecords.create({
      data: {
        type: FinancialRecordsType,
        value,
        description,
        report_id: reportId,
      },
      select: {
        id_e: true,
        description: true,
        value: true,
      },
    });

    return newFinancialRecord;
  }
}

export { FinancialRecordsRepository };
