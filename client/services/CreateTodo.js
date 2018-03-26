import mockCards from '../db/db.js';

function CreateTodos(object) {
    var taskObj = {
        id: mockCards.lenght,
        title: object.title,
        tasks: object.tasks
    }

    mockCards.push(taskObj);
}

export default CreateTodos;