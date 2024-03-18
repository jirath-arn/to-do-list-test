let taskList = [
    { id: 1, description: 'Test assignments' }
];

const getAll = async (req, res) => {
    return res.status(200).json({
        data: taskList
    });
};

const getTask = async (req, res) => {
    const id = req.params.id;
    const task = taskList.find((task) => task.id == id) || null;
    
    return res.status(200).json({
        data: task
    });
};

const createTask = async (req, res) => {
    const description = req.body.description;

    if (!description) {
        return res.status(400).json({
            message: 'Invalid description field.'
        });
    }

    const id = taskList.sort((task1, task2) => task1.id - task2.id)[taskList.length - 1].id + 1;
    const newTask = {
        id,
        description
    };
    taskList.push(newTask);

    return res.status(201).json({
        message: 'Task created successfully.',
        data: newTask
    });
};

const updateTask = async (req, res) => {
    const id = req.params.id;
    const description = req.body.description;
    const task = taskList.find((task) => task.id == id);

    if (task) {
        task.description = description || task.description;

        return res.status(200).json({
            message: 'Task updated successfully.',
            data: task
        });
    }
    
    return res.status(404).json({
        message: 'Task not found.'
    });
};

const deleteTask = async (req, res) => {
    const id = req.params.id;
    taskList = taskList.filter(task => task.id != id);

    return res.status(200).json({
        message: 'Task deleted successfully.'
    });
};

module.exports = {
    getAll,
    getTask,
    createTask,
    updateTask,
    deleteTask
};
