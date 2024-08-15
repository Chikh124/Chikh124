import { VideoWhereUniqueInput } from "../video/VideoWhereUniqueInput";

export type ScheduleCreateInput = {
  postDateTime?: Date | null;
  video?: VideoWhereUniqueInput | null;
};
