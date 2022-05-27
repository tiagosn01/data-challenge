import { List, Datagrid, TextField, NumberField, EditButton, BooleanField } from 'react-admin';

export const PartsList = () => (
    <List>
        <Datagrid rowClick="edit" >
            <TextField source="id" />
            <TextField source="name" />
            <NumberField source='quantity' />
            <BooleanField source="status" />
            <EditButton />
        </Datagrid>
    </List>
);