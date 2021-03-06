import url from '../config/config';
import Axios from 'axios';

var GetTodos = new Promise(function(resolve, reject) {
    Axios.get(`${url}/tasks`)
        .then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            console.log(error);
            reject();
        });
});

export default GetTodos;