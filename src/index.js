const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/users");
const taskRouter = require("./routers/tasks");
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerJsDocs = YAML.load("./api.yaml");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));
app.use(express.json());

app.listen(port, () => {
  console.log("Server is up on " + port);
});

//Exploring User/Task relationship

// const Task = require("./models/task");
// const User = require("./models/user");

// const main = async () => {
//   // const task = await Task.findById("627ad028cac29dad7bd67860")
//   // await task.populate("owner").execPopulate()
//   // console.log(task.owner)

//   const user = await User.findById("627acf5bcac29dad7bd6785b");
//   await user.populate("tasks");
//   console.log(user.tasks);
// };

// main();
