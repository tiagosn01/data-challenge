import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

const apiUrl = 'https://62901c3ed9d3f1f54c4d0663.mockapi.io/data/api/v1';
const httpClient = fetchUtils.fetchJson;

export default {
    getList: (resource: any, params: any) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
       
        const lowerCaseOrder =  order.toLowerCase()
        console.log(field, order)
        
        const sortBy = `sortBy=${field}&order=${lowerCaseOrder}`;
        const range = `page=${page}&limit=${perPage}`
        // const filter = JSON.stringify(params.filter);
  
        const url = `${apiUrl}/${resource}?${sortBy}&${range}`;

        return httpClient(url).then(({ headers , json }) => {
          console.log(headers)
         
         return  {
            data: json,
            total: 14,
        }});
    },

    getOne: (resource: any, params: any) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
            data: json,
        })),

    getMany: (resource: any, params: any) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({ json }) => ({ data: json }));
    },

    getManyReference: (resource: any, params: any) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }) => ({
            data: json,
            total: 14,
        }));
    },

    update: (resource: any, params: any) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json })),

    updateMany: (resource: any, params: any) => {
        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },

    create: (resource: any, params: any) =>
        httpClient(`${apiUrl}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({
            data: { ...params.data, id: json.id },
        })),

    delete: (resource: any, params: any) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json })),

    deleteMany: (resource: any, params: any) => {
        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json }));
    }
};