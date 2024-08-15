import { ScheduleUpdateManyWithoutVideosInput } from "./ScheduleUpdateManyWithoutVideosInput";

export type VideoUpdateInput = {
  hashtags?: string | null;
  name?: string | null;
  path?: string | null;
  schedules?: ScheduleUpdateManyWithoutVideosInput;
};
