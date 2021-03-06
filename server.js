const express = require('express');

// const app = express();
// const port = process.env.PORT || 8080;
//
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// // ...
//
// // routes will go here
// // ...
//
// app.post('/api/users', function(req, res) {
//     const user_id = req.body.id;
//     const token = req.body.token;
//     const geo = req.body.geo;
//
//     res.send({
//         'user_id': user_id,
//         'token': token,
//         'geo': geo
//     });
// });
//
// app.listen(port);
// console.log('Server started at http://localhost:' + port);
// // ...

const cors = require("cors");

const app = express();

const corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezzzzzkoder application." });
});

// set port, listen for requests
require("./app/routes/assignment.routes")(app);
require("./app/routes/client.routes")(app);
require("./app/routes/opening.routes")(app);
require("./app/routes/practice.routes")(app);
require("./app/routes/region.routes")(app);
require("./app/routes/role.routes")(app);
require("./app/routes/status.routes")(app);
require("./app/routes/tutorial.routes")(app);
require("./app/routes/user.routes")(app);
// require("./app/routes/tutorial.routes")(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});
