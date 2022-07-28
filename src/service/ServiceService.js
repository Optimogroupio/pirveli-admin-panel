import axios from "axios";


export class ServiceService {

    getServices() {
        return axios.get("")
            .then(res => res.data.data)
    }
}
