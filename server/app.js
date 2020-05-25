const express = require("express");
const graphqlHTTP = require('express-graphql');
const mongoose = require("mongoose");
const cors = require("cors");
const schema = require('./schema/schema')
require("dotenv/config");

const app = express();

app.use(cors());

mongoose.connect(
  process.env.URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("connected to mongodb 🥭")
);

// for graphiql
app.use('/graphql', graphqlHTTP({
  schema: schema, 
  graphiql: true
}))

app.listen(process.env.PORT, () =>
  console.log(`listening to port`, process.env.PORT)
);
