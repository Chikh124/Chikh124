import { ScheduleCreateNestedManyWithoutVideosInput } from "./ScheduleCreateNestedManyWithoutVideosInput";

export type VideoCreateInput = {
  hashtags?: string | null;
  name?: string | null;
  path?: string | null;
  schedules?: ScheduleCreateNestedManyWithoutVideosInput;
};
