import { Admin, Resource, EditGuesser, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { CategoriesList } from './pages/Category';
import { PartsList } from './pages/Parts';

import { FiPackage, FiList } from "react-icons/fi";

import dataProvider from './services/api';

const App = () => (
    <Admin dataProvider={dataProvider}  >
        <Resource options={{label: 'Categoias'}} name="categories" list={CategoriesList} edit={EditGuesser} icon={FiList} />
        <Resource options={{label: 'Peças'}} name="parts" list={PartsList} edit={EditGuesser}  icon={FiPackage}  />
    </Admin>
);

export default App;