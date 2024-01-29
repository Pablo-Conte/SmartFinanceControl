type TCreateFinancialRecord = {
  FinancialRecordsType: "INCOME" | "EXPENSE";
  value: number;
  description: string;
  reportId: string;
};

type TCreateFinancialRecordReturn = {
  id_e: string;
  description: string;
  value: number;
};

export { TCreateFinancialRecord, TCreateFinancialRecordReturn };
