
const getAllTasks = (req , res) =>{
    res.send('get all tasks')
}

const createTask = (req , res) => {
    res.json(req.body)
}

const getSingleTask = (req , res) => {
    res.json({id: req.params.id})
}

const updateTask = (req , res) =>{
    res.send('update single task')
}

const deleteTask = (req , res) =>{
    res.send('delete task')
}



module.exports = {
    getAllTasks, 
    createTask,
    getSingleTask,
    updateTask, 
    deleteTask
}