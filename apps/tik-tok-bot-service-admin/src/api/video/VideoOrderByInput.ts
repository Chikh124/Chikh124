import { SortOrder } from "../../util/SortOrder";

export type VideoOrderByInput = {
  createdAt?: SortOrder;
  hashtags?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  path?: SortOrder;
  updatedAt?: SortOrder;
};
