import { Video } from "../video/Video";

export type Schedule = {
  createdAt: Date;
  id: string;
  postDateTime: Date | null;
  updatedAt: Date;
  video?: Video | null;
};
