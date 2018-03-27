import mockCards from '../db/db.js';

function CreateTodos(object) {
    var taskObj = {
        id: mockCards.length + 1,
        title: object.title,
        tasks: object.tasks
    }

    mockCards.push(taskObj);
}

export default CreateTodos;