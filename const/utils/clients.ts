import axios from 'axios';
import { Client } from '../types/clients';
import Constants from 'expo-constants';

const apiUrl = Constants?.expoConfig?.extra?.apiUrl;

export const getClients = async () => {
    const { data } = await axios.get(apiUrl+'/clients.json');
    const clientList = []
    for (const key in data) {
        const clientObj = {
            id: key,
            name: data[key].name,
            // phone: data[key].phone,
            // address: data[key].address,
            // createdAt: data[key].createdAt,
            // updatedAt: data[key].updatedAt,
        }
        clientList.push(clientObj)
    }
    return clientList;
}
 export const postClients = async (client: Client) => {
    const { data } = await axios.post(apiUrl+'/clients.json', client);
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