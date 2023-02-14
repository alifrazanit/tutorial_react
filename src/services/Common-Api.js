import axios from 'axios';
export class CommonApi {
    constructor(){}

    async get(url){
        return await axios.get(url);
    }
}