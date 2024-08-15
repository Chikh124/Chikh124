import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const TikTokAccountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="accessToken" source="accessToken" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="password" source="password" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="username" source="username" />
      </SimpleShowLayout>
    </Show>
  );
};
