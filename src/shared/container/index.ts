import { container, delay } from "tsyringe";

import { IUsersRepository } from "@modules/accounts/infra/IUsersRepository";

import { UsersRepository } from "../../modules/accounts/infra/repositories/UsersRepository";
import { UserTokenRepository } from "../../modules/accounts/infra/repositories/UsersTokenRepository";
import { FinancialRecordsRepository } from "@modules/reports/infra/repositories/FinancialRecordsRepository";
import { ReportsRepository } from "@modules/reports/infra/repositories/ReportsRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  delay(() => UsersRepository)
);

container.registerSingleton<UserTokenRepository>(
  "UserTokenRepository",
  delay(() => UserTokenRepository)
);

container.registerSingleton<ReportsRepository>(
  "ReportsRepository",
  delay(() => ReportsRepository)
);

container.registerSingleton<FinancialRecordsRepository>(
  "FinancialRecordsRepository",
  delay(() => FinancialRecordsRepository)
);
