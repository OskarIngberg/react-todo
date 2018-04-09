import url from '../config/config';

import Axios from 'axios';

function RemoveTodo(id) {
    Axios.delete(`${url}/tasks/${id}`).then(res => console.log(res.data));
}

export default RemoveTodo;