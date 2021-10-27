const express = require("express");
const tasks = require("./routes/tasks")
const app = express();


// Middleware 
app.use(express.json())


// routes
app.get("/hello", (req , res) => {
    res.send("task manager app")
})

app.use('/api/v1/tasks', tasks)

//app.get('/api/v1/tasks)           - get all tasks
//app.post('/api/v1/tasks)          - create a new task
//app.get('/api/v1/tasks/:id)       - get a single task
//app.patch('/api/v1/tasks/:id)     - update task
//app.delete('/api/v1/tasks/:id)    - delete task

const port = 5000;

app.listen(5000, () => {
    console.log(`the server is listening on port ${port}....`)
})