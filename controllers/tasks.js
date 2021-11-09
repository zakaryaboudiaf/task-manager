const Task = require('../models/tasks')
const asyncWrapper = require('../middleware/async')
const { createCustomError , CustomAPIError } = require('../errors/custom-error')
const { Error } = require('mongoose')


const getAllTasks = asyncWrapper( async (req , res) =>{
    
        const tasks = await Task.find({})
        res.status(201).json({ tasks })
   
})

const createTask = asyncWrapper( async (req , res) => {
    
        const task = await Task.create(req.body)
        res.status(201).json({ task })
   
})

const getSingleTask = asyncWrapper( async(req , res , next) => {
    
        const task = await Task.findOne({_id : req.params.id})
        if(!task){
            return next(createCustomError(`no task with id : ${req.params.id}`,404))
            return res.status(404).json({ msg : `no task with id : ${req.params.id}` })
        }
        res.status(201).json({task})
         
})



const deleteTask = asyncWrapper( async(req , res) =>{

        const task = await Task.findOneAndDelete({_id : req.params.id})
        if(!task){
            return next(createCustomError(`no task with id : ${req.params.id}`,404))
        }
        res.status(200).json({task})
        
})

const updateTask = asyncWrapper( async(req , res) =>{
    
        const { id:taskID } = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID} , req.body,{ new:true , runValidators: true })
        if(!task){
            return next(createCustomError(`no task with id : ${req.params.id}`,404))
        }
        res.status(200).json({task})

})


module.exports = {
    getAllTasks, 
    createTask,
    getSingleTask,
    updateTask, 
    deleteTask
}