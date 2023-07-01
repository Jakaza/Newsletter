let SUBCRIBER_API = 'http://localhost:5000/api/v1/subscribe';
let UNSUBCRIBER_API = 'api/v1/unsubscribe/';

class Subcription {

    subcribe(subscription) {
        return fetch('http://localhost:5000/api/v1/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(subscription)
        });
    }

    unSubcribe(email) {
        UNSUBCRIBER_API + email;
        return axios.get(SUBCRIBER_API)
    }
}

export default new Subcription()
