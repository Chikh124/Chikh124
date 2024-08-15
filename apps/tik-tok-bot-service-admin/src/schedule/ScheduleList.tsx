import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { VIDEO_TITLE_FIELD } from "../video/VideoTitle";

export const ScheduleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Schedules"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="postDateTime" source="postDateTime" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="video" source="video.id" reference="Video">
          <TextField source={VIDEO_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
