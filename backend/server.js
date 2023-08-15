"use strict";
const cors = require("cors");
const morgan = require("express");
const express = require("express");
const db = require("./models/index");
const bodyParsE = require("body-parser");
const customerRouter = require("./routes/customer.routes");
const bodyParser = require("body-parser");

const app = express();


app.use(cors);
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

setTimeout(
    () =>
        db.sequelize
            .authenticate()
            .then(() => {
                db.sequelize.sync({ forse: false });
                console.log("Authenticated");
            })
            .catch((err) => console.log("Error occured", err)),
    10000
);


const port = process.env.PORT || 8080;
const dbPort = process.env.POSTGRES_PORT;
app.use("/", customerRouter);
process.on("unhandledRejection", (err) => {
    console.log(err);
});
app.listen(port, () =>
    console.log("server is listening at ${çport} and database is running ar ${dbPort}"
    )
);