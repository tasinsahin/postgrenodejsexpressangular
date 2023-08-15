const { Sequelize } = require("sequelize");
const sequelize = new Sequelize({
    host: "localhost",
    dialect: "postgress",
    username: "postgres",
    password: "12345",
    database: "angular",
    logging: false,
});
const db={};
db.sequelize=sequelize;
db.Sequelize= Sequelize;
db.Customers = require("./customer")(sequilize,Sequelize);
module.exports=db;
