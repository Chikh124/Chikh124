import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { VideoTitle } from "../video/VideoTitle";

export const ScheduleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="postDateTime" source="postDateTime" />
        <ReferenceInput source="video.id" reference="Video" label="video">
          <SelectInput optionText={VideoTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
