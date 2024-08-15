import { TikTokAccount as TTikTokAccount } from "../api/tikTokAccount/TikTokAccount";

export const TIKTOKACCOUNT_TITLE_FIELD = "username";

export const TikTokAccountTitle = (record: TTikTokAccount): string => {
  return record.username?.toString() || String(record.id);
};
