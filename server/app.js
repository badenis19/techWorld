const express = require("express");
// const graphql = require('graphql')
// const graphqlHTTP = require('express-graphql');
const mongoose = require("mongoose");
const cors = require("cors");
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

// app.use('/graphql', graphqlHTTP({
//   // schema will tell express-graphql about the data (data-types, properties, relationships) & how the graph will look
//   schema: schema, // with ES6 could only put schema as the name are the same
//   graphiql: true
// }))

app.listen(process.env.PORT, () =>
  console.log(`listening to port`, process.env.PORT)
);
