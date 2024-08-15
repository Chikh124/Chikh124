import { VideoWhereUniqueInput } from "../video/VideoWhereUniqueInput";

export type ScheduleUpdateInput = {
  postDateTime?: Date | null;
  video?: VideoWhereUniqueInput | null;
};
