import { VideoWhereUniqueInput } from "./VideoWhereUniqueInput";
import { VideoUpdateInput } from "./VideoUpdateInput";

export type UpdateVideoArgs = {
  where: VideoWhereUniqueInput;
  data: VideoUpdateInput;
};
