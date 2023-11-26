const db = require("../db/db")

exports.createDB = (req, res) => {
    let q = 'CREATE DATABASE taskmanagement';
    db.query(q, (err, result) => {
        if(err) throw err;
        return res.status(201).json("DB taskmanagement created")
    } )
}

exports.createTable = (req,res) => {
    let q = 'CREATE TABLE tasks(`id` int AUTO_INCREMENT, `taskname` VARCHAR(45), `desc` VARCHAR(200), PRIMARY KEY(id))';
    db.query(q, (err, result) => {
        if(err) throw err;
        return res.status(201).json("TABLE tasks created")
    })
}

exports.createList = (req, res) => {
    const q = "INSERT INTO tasks SET ?";
    
    const { taskname, desc} = req.body;

    db.query(q, {taskname, desc}, (err, result) => {
        if (err) return res.json(err);
        return res.status(200).json(result);
    })
}

exports.showTasks = (req, res) => {
    const q = "SELECT * FROM tasks";

    db.query(q, (err, result) => {
        if(err) return res.json(err);
        return res.status(200).json(result);
    })
}

exports.singleTask = (req,res) => {
    const q = `SELECT * FROM tasks WHERE id=${req.params.id}`;
    db.query(q, (err, result) => {
        

        db.query(q, (err, result) => {
            if(err) return res.json(err);
            return res.status(200).json(result[0]);
        })
    })
}

exports.updateTask = (req, res) => {
    const {taskname, desc} = req.body;
    const q = `UPDATE tasks SET ? WHERE id=${req.params.id}`;

    db.query(q, {taskname, desc}, (err, result) => {
        if(err) return res.json(err);
        return res.status(200).json(result);
    })
}

exports.deleteSingleTask = (req,res) => {
    const q=`DELETE FROM tasks WHERE id=${req.params.id}`;

    db.query(q, (err,result) => {
        if(err) return res.json(err);
        return res.status(201).json({data : "task deleted"})
    })
}