import { Admin, Resource, EditGuesser, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { CategoriesList } from './pages/Category';
import { PartsList } from './pages/Parts';

import { FiPackage, FiList } from "react-icons/fi";

import dataProvider from './services/api';

const App = () => (
    <Admin dataProvider={dataProvider}  >
        <Resource name="categories" list={CategoriesList} edit={EditGuesser} icon={FiList} />
        <Resource name="parts" list={PartsList} edit={EditGuesser}  icon={FiPackage}  />
    </Admin>
);

export default App;