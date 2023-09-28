//Require
const express = require("express");

//App Declaration
const app = express();

//Setting View Engine
app.set("view engine", "ejs");

//Static and Middleware
app.use(express.static("public"));

//GET REQUEST - BASE
app.get("/", (req, res) => {
    res.render("index");
})

//Setup Server at 3000
app.listen(process.env.PORT || 3000, () => {
    console.log("I'm Listening..");
});
 