const express = require("express");
const { connectToMongoDB } = require("./connect");
const userRouter = require("./routes/user");
const questionRouter = require("./routes/questions");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require('cors');

const app = express();
const PORT = 8000;

connectToMongoDB(
  "mongodb+srv://Vardaan:ZmOHzvJD8IzaUP7h@cluster0.ucz7u9g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static('./public'));

app.use(cors({
  origin: 'http://localhost:5173', 
  methods: 'GET,POST,PUT,DELETE', 
  credentials: true                
}));

app.use("/user", userRouter);
app.use("/question", questionRouter);

app.listen(PORT, () => console.log("Server Started at PORT ", PORT));
