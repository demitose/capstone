const express = require("express");
const app = express();

require("dotenv").config();
let dbConnect = require("./dbConnect");


app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my mySQLDB application." });
});

let userRoutes = require('./routes/userRoutes')
app.use('/api/users', userRoutes)

let makeupProductRoutes = require('./routes/makeupProductRoutes')
app.use('/api/MakeupProduct',makeupProductRoutes)




const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
