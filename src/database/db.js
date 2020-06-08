const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            image TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        )
    `)

/*
    db.run(`DELETE FROM places WHERE id=?`, [1], function (err){
        if (err) {
            return console.log(err)
        }
        console.log("Registro deletado com sucesso!")
    })
    db.all(`SELECT * FROM places`, function (err, rows){
        if (err) {
            return console.log(err)
        }
        console.log("Aqui estão seus registros: ")
        console.log(rows)
    })
*/
})