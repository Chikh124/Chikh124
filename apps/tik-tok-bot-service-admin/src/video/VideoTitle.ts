import { Video as TVideo } from "../api/video/Video";

export const VIDEO_TITLE_FIELD = "name";

export const VideoTitle = (record: TVideo): string => {
  return record.name?.toString() || String(record.id);
};
