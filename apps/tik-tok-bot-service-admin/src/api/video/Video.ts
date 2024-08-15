import { Schedule } from "../schedule/Schedule";

export type Video = {
  createdAt: Date;
  hashtags: string | null;
  id: string;
  name: string | null;
  path: string | null;
  schedules?: Array<Schedule>;
  updatedAt: Date;
};
