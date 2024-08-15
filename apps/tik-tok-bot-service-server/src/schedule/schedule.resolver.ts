import * as graphql from "@nestjs/graphql";
import { ScheduleResolverBase } from "./base/schedule.resolver.base";
import { Schedule } from "./base/Schedule";
import { ScheduleService } from "./schedule.service";

@graphql.Resolver(() => Schedule)
export class ScheduleResolver extends ScheduleResolverBase {
  constructor(protected readonly service: ScheduleService) {
    super(service);
  }
}
