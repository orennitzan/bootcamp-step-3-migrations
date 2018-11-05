const { createDb, migrate } = require("postgres-migrations")

createDb("risingstack", {
    defaultDatabase: "risingstack", // optional, default: "postgres"
    user: "postgres",
    password: "P123456",
    host: "localhost",
    port: 5432,
})
    .then(() => migrate({
        database: "risingstack",
        user: "postgres",
        password: "P123456",
        host: "localhost",
        port: 5432,
    }, "./models/db/scripts/")
    )
    .then(() => {/* ... */ })
    .catch((err) => {
        console.log(err)
    })