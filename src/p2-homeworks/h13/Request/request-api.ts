import axios from "axios";

const baseURL = 'https://neko-cafe-back.herokuapp.com/';

const instance = axios.create({
    baseURL,
});

export const RequestsAPI = {
    authTest(success: boolean) {
        return instance.post(`auth/test`, {success});
    }
}