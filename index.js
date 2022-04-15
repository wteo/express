const express = require("express");
const path = require("path") // node.JS method

const app = express();

/*
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html")); 
    // This allows you to upload file. Though. not the most ideal approach as you will need to manually put a separate route each time you upload a file.
    // In particular, if only intend to create a static website using only HTML and CSS.
})
*/

// Set static folder
app.use(express.static(path.join(__dirname,"public")));
// "".use()"" is a method used when want to include a middleware

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});