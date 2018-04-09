import url from '../config/config';

import Axios from 'axios';

function CreateTodos(object) {
    var taskObj = {
        title: object.title,
        tasks: object.tasks
    }

    return (
        new Promise(function(resolve, reject) {
            Axios.post(`${url}/tasks`, taskObj)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                    reject();
                });
        })
    )
}

export default CreateTodos;