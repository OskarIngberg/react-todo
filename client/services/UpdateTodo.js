import url from '../config/config';

import Axios from 'axios';

function UpdateTodo(id, body) {
    Axios.put(`${url}/tasks/${id}`, body)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}

export default UpdateTodo;