import { List, Datagrid, TextField, EditButton } from 'react-admin';

export const CategoriesList = () => (
    <List >
        <Datagrid rowClick="edit" >
            <TextField source="id" />
            <TextField source="name" />         
            <EditButton />
        </Datagrid>
    </List>
);