import axios from "axios";

axios.defaults.baseURL = 'https://650f4c6354d18aabfe99ff49.mockapi.io/api/v1';

export async function fetchContacts() {
    const response = await axios.get('/contacts');
    return response.data;
}