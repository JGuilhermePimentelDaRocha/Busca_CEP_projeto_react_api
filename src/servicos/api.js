import axios from "axios";

//25961143/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;