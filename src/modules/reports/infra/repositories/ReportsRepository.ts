import {
  TCreateReport,
  TCreateReportReturn,
} from "@modules/reports/types/TCreateReport";
import { prisma } from "@src/database/PrismaClient";
import { IReportsRepository } from "../Interfaces/IReportsRepository";
import {
  TReadReportOfMonth,
  TReadReportOfMonthReturn,
} from "@modules/reports/types/TReadReportOfMonth";

class ReportsRepository implements IReportsRepository {
  async createReport({ userId }: TCreateReport): Promise<TCreateReportReturn> {
    const actualDate = new Date();
    const firstDayOfMonth = new Date(
      actualDate.getFullYear(),
      actualDate.getMonth(),
      1
    );
    const newReport = await prisma.reports.create({
      data: {
        user_id: userId,
        date: firstDayOfMonth,
      },
      select: {
        id_e: true,
        user_id: true,
      },
    });

    return newReport;
  }

  async readReportOfMonth({
    userId,
  }: TReadReportOfMonth): Promise<TReadReportOfMonthReturn> {
    const actualDate = new Date();
    const firstDayOfMonth = new Date(
      actualDate.getFullYear(),
      actualDate.getMonth(),
      1
    );
    const reportOfMonth = await prisma.reports.findFirst({
      where: {
        user_id: userId,
        created_at: firstDayOfMonth,
      },
      select: {
        id_e: true,
        user_id: true,
      },
    });

    return reportOfMonth;
  }
}

export { ReportsRepository };
