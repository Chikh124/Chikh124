import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { VideoTitle } from "../video/VideoTitle";

export const ScheduleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="postDateTime" source="postDateTime" />
        <ReferenceInput source="video.id" reference="Video" label="video">
          <SelectInput optionText={VideoTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
