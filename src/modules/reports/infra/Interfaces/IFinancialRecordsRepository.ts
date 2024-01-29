import {
  TCreateFinancialRecord,
  TCreateFinancialRecordReturn,
} from "@modules/reports/types/TCreateFinancialRecord";

interface IFinancialRecordsRepository {
  createFinancialRecord({
    FinancialRecordsType,
    value,
    description,
    reportId,
  }: TCreateFinancialRecord): Promise<TCreateFinancialRecordReturn>;
}

export { IFinancialRecordsRepository };
