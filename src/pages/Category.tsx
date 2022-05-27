import { List, Datagrid, TextField, EditButton } from 'react-admin';

export const CategoriesList = () => (
    <List title="Categoria">
        <Datagrid rowClick="edit" >
            <TextField source="id" label="Código"/>
            <TextField source="name" label="Nome"/>         
            <EditButton />
        </Datagrid>
    </List>
);