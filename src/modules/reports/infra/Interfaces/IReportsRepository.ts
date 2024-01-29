import {
  TCreateReport,
  TCreateReportReturn,
} from "@modules/reports/types/TCreateReport";
import {
  TReadReportOfMonth,
  TReadReportOfMonthReturn,
} from "@modules/reports/types/TReadReportOfMonth";

interface IReportsRepository {
  createReport({ userId }: TCreateReport): Promise<TCreateReportReturn>;
  readReportOfMonth({
    userId,
  }: TReadReportOfMonth): Promise<TReadReportOfMonthReturn>;
}

export { IReportsRepository };
