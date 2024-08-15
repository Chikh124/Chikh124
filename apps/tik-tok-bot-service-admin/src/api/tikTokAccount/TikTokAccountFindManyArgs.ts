import { TikTokAccountWhereInput } from "./TikTokAccountWhereInput";
import { TikTokAccountOrderByInput } from "./TikTokAccountOrderByInput";

export type TikTokAccountFindManyArgs = {
  where?: TikTokAccountWhereInput;
  orderBy?: Array<TikTokAccountOrderByInput>;
  skip?: number;
  take?: number;
};
