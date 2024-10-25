const express = require("express");
const app = express();
const tasks = require("./routes/tasksRoute");
const users = require("./routes/usersRoute");
const auth = require("./routes/authRoute");
const connectDB = require("./db/connect");
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

require("dotenv").config();

app.use(express.static('./client'))
app.use(express.json());


app.use("/api/v1/tasks", tasks);
app.use('/api/v1/users', users);
app.use('/api/v1/auth', auth); 
app.use(notFound);
app.use(errorHandlerMiddleware)



const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is running on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
