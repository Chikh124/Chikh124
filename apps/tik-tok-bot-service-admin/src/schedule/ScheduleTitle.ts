import { Schedule as TSchedule } from "../api/schedule/Schedule";

export const SCHEDULE_TITLE_FIELD = "id";

export const ScheduleTitle = (record: TSchedule): string => {
  return record.id?.toString() || String(record.id);
};
