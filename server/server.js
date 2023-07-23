const express = require('express')
const cors = require('cors')
const connectToMongo = require("./db");
const userAuth = require('./routes/auth/userAuth')

const app = express();

require("dotenv").config();

app.use(cors());
app.use(express.json());

// Available Routes
app.use("/auth", userAuth);

connectToMongo();

const server = app.listen(process.env.PORT, () => {
	console.log(`app listening on Port ${process.env.PORT}`)
})