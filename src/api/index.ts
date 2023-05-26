import Axios from "axios";

const instance = Axios.create({
    baseURL: "http://localhost:3300/api/v1",
});

export default instance;
