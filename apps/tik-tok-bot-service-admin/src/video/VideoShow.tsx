import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { VIDEO_TITLE_FIELD } from "./VideoTitle";

export const VideoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="hashtags" source="hashtags" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="path" source="path" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Schedule"
          target="videoId"
          label="Schedules"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
