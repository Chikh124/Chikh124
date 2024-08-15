import { VideoWhereInput } from "./VideoWhereInput";

export type VideoListRelationFilter = {
  every?: VideoWhereInput;
  some?: VideoWhereInput;
  none?: VideoWhereInput;
};
