import { VideoWhereInput } from "./VideoWhereInput";
import { VideoOrderByInput } from "./VideoOrderByInput";

export type VideoFindManyArgs = {
  where?: VideoWhereInput;
  orderBy?: Array<VideoOrderByInput>;
  skip?: number;
  take?: number;
};
