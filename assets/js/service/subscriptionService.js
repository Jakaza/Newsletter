let SUBCRIBER_API = 'v1/api/subscribe/';
let UNSUBCRIBER_API = 'v1/api/unsubscribe/';

export default class Subcription {

    subcribe(email) {
        SUBCRIBER_API + email;
        return axios.get(SUBCRIBER_API)
    }

    unSubcribe(email) {
        UNSUBCRIBER_API + email;
        return axios.get(SUBCRIBER_API)
    }
}

