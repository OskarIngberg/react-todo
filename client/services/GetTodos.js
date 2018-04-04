import mockCards from '../db/db.js';

import axios from 'axios';

var GetTodos = new Promise(function(resolve, reject) {
    axios.get('http://localhost:3000/tasks')
        .then((response) => {
            console.log(response.data);
            resolve(response.data);
        })
        .catch((error) => {
            console.log(error);
            reject();
        });
});



export default GetTodos;