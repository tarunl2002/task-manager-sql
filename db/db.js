const mysql = require("mysql");

const db = mysql.createConnection({
    host:"localhost",
    user: "tarun",
    password: "123456789",
    database: "test"

});

db.connect(error => {
    if(error) throw error;
    console.log("DB Connected");
});

module.exports = db