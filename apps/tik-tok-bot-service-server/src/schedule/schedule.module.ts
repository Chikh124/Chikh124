import { Module } from "@nestjs/common";
import { ScheduleModuleBase } from "./base/schedule.module.base";
import { ScheduleService } from "./schedule.service";
import { ScheduleController } from "./schedule.controller";
import { ScheduleResolver } from "./schedule.resolver";

@Module({
  imports: [ScheduleModuleBase],
  controllers: [ScheduleController],
  providers: [ScheduleService, ScheduleResolver],
  exports: [ScheduleService],
})
export class ScheduleModule {}
