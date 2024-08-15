import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { VideoWhereUniqueInput } from "../video/VideoWhereUniqueInput";

export type ScheduleWhereInput = {
  id?: StringFilter;
  postDateTime?: DateTimeNullableFilter;
  video?: VideoWhereUniqueInput;
};
