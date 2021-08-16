const express = require('express');
const { getDb, saveDb } = require('./db');

const app = express();

//解析配置表单 请求体：application/json
app.use(express.json());

//解析配置表单 请求体：application/x-www-form-urlencoded
// app.use(express.urlencoded());


const myLogger = (req) =>{
    console.log(req.method,req.url,Date.now())
}

function sayMessage(message = "Hello World!"){
    return (req, res, next) => {
        console.log(message);
        next();
    }
}

app.use(sayMessage())

//request
//response
//next 下一个中间件
app.use((req, resp, next)=>{
    req.foo = 'bar';
    req.time = Date.now();
    resp.abc = () =>{
        console.log("ABC", req.time)
    }
    myLogger(req)
    next();
})


app.get('/todos', async (req, res) => {
    // fs.readFile('./db.json','utf-8',(err,data) => {
    //     if(err){
    //         return res.status(500).json({error: err.message})
    //     }
    //     const db = JSON.parse(data)
    //     res.status(200).json(db.todos)
    // })

    try {
        const db = await getDb()
        console.log(req.foo)
        res.abc();
        res.status(200).json(db.todos)
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})

app.get('/todos/:id', async (req, res) => {
    try {
        const db = await getDb()
        const todo = db.todos.find(todo => todo.id === Number.parseInt(req.params.id))
        if (!todo) {
            return res.status(404).json({
                "error": `ID: ${req.params.id} not found`
            })
        }
        res.status(200).json(todo)
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})

app.post('/todos', async(req, res) => {
    try {
        //1.获取客户端请求参数
        const todo = req.body

        //2.数据验证
        if(!todo.title){
            return res.status(422).json({error : "The field 'title' is required."})
        }
        //3.数据验证通过，把数据储存到 db 中
        const db = await getDb();
        const lastTodo = db.todos[db.todos.length - 1 ];
        todo.id = lastTodo? lastTodo.id + 1 : 1
        db.todos.push(todo)
        await saveDb(db);
        res.status(201).json(todo)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
    
})

app.put('/todos/:id', async(req, res) => {
    try {
        //1. 获取表单数据
        const todo2 = req.body

        //2. 查找要修改的任务选项
        const db = await getDb()
        const ret = db.todos.find(todo => todo.id === Number.parseInt(req.params.id))

        if(!ret){
            return res.status(404).json({
                "error": `ID: ${req.params.id} not found`
            })
        }

        Object.assign(ret, todo2);
        await saveDb(db);
        res.status(201).json(ret)

    } catch (error) {
        res.status(500).json({error: error.message})
    }
    
})

app.delete('/todos/:id', async(req, res) => {
    try {
        const id = Number.parseInt(req.params.id);
        const db = await getDb();
        const index = db.todos.findIndex(todo => todo.id === id);
        if(index === -1){
            return res.status(404).json({
                "error": `ID: ${id} not found`
            })
        }
        db.todos.splice(index, 1)
        await saveDb(db);
        res.status(204).end();

    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

//cannot be use
// function getRunTime(){
//     return (req,res, next) => {
//         const DifferenceInTime = Date.now() - req.time;
//         console.log(DifferenceInTime)
//         next();
//     }
// }

// app.use(getRunTime())

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000")
})