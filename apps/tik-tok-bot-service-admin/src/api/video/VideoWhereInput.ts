import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ScheduleListRelationFilter } from "../schedule/ScheduleListRelationFilter";

export type VideoWhereInput = {
  hashtags?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  path?: StringNullableFilter;
  schedules?: ScheduleListRelationFilter;
};
