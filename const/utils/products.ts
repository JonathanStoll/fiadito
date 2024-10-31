import axios from 'axios';
import { Products } from '../types/products';
import Constants from 'expo-constants';

const apiUrl = Constants?.expoConfig?.extra?.apiUrl;

export const getProducts = async () => {
    const { data } = await axios.get(apiUrl+'/products.json');
    const productList = []
    for (const key in data) {
        const ProductsObj = {
            id: key,
            name: data[key].name,
            // phone: data[key].phone,
            // address: data[key].address,
            // createdAt: data[key].createdAt,
            // updatedAt: data[key].updatedAt,
        }
        productList.push(ProductsObj)
    }
    return productList;
}
 export const postProduts = async (client: Products) => {
    const { data } = await axios.post(apiUrl+'/products.json', client);
    return data;
}

// export const editClients = async (client: Client) => {
//     const { data } = await axios.put('https://api.fake-rest.ninja/clients', client);
//     return data;
// }

// export const deleteClients = async (client: Client) => {
//     const { data } = await axios.delete('https://api.fake-rest.ninja/clients', client);
//     return data;
// }