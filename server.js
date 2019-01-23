const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const models = require("./models");

const routerIndex = require("./routes/index");
const routerMovies = require("./routes/movies");
const routerCategories = require("./routes/categories");

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended : true
}));

app.use(morgan("dev"));

app.use('/', routerIndex);
app.use('/movies', routerMovies);
app.use('/categories', routerCategories);

models.sequelize.sync().then(() => {
    setInterval(() => {
      const used = process.memoryUsage().heapUsed / 1024 / 1024;
      console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
    },5000)
  app.listen(process.env.PORT || 3002);
});