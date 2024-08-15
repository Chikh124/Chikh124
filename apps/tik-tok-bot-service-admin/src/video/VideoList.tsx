import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const VideoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Videos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="hashtags" source="hashtags" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="path" source="path" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
