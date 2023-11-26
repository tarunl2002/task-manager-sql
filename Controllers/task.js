const db = require("../db/db")

exports.createDB = (req, res) => {
    let q = 'CREATE DATABASE taskmanagement';
    db.query(q, (err, result) => {
        if(err) throw err;
        return res.status(201).json("DB taskmanagement created")
    } )
}