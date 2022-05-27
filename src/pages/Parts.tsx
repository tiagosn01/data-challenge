import { List, Datagrid, TextField, NumberField, EditButton, BooleanField } from 'react-admin';

export const PartsList = () => (
    <List title="Peças">
        <Datagrid rowClick="edit">
            <TextField source="id" label='Código' />
            <TextField source="name" label="Nome" />
            <NumberField source='quantity'  textAlign='left'  label="Quantidade"/>
            <BooleanField source="status" />
            <EditButton />
        </Datagrid>
    </List>
);