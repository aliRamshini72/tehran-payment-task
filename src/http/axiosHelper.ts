import axios from 'axios';

const baseUrl: string = "https://api.coingecko.com";


type MethodType = 'GET' | 'DELETE' | "POST" | "UPDATE"

export enum Method {
    GET = 'GET',
    DELETE = 'DELETE',
    POST = 'POST',
    UPDATE = 'UPDATE',
}

async function fetch(url: string, method: MethodType, data: any) {

    if ((!data || data === "") || data === null) data = {}; //for get method
    let headers = {
        'Content-Type': 'application/json'
    };
    try {
        let response = await axios({url: baseUrl + url, data: {...data}, method, headers});
        return response.data
    } catch (e: any) {
        return {error: e.message}
    }
}


export default fetch
