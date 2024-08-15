import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TikTokAccountWhereInput = {
  accessToken?: StringNullableFilter;
  id?: StringFilter;
  password?: StringNullableFilter;
  username?: StringNullableFilter;
};
