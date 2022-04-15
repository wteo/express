const express = require("express");
const path = require("path") // node.JS method
const logger = require("./middleware/logger");
const members = require("./Members");

const app = express();

// To initialize your middleware
// app.use(logger);

// Gets All Members
app.get("/api/members", (req, res) => {
    res.json(members);
    // this returns an object as a json file;
}); 

// Set static folder
app.use(express.static(path.join(__dirname,"public"))); // this is the more ideal way to publish a static page.
// "".use()"" is a method used when want to include a middleware
// You can add as many html files as you want in the public folder.
// But this isn't what you mostly use express for.

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});