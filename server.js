const express = require("express");
const mongoose = require("mongoose");
const path = require("path")
// const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const app = express();
const PORT = process.env.PORT || 3001;

const { typeDefs, resolvers } = require("./server/Schema/index.js");
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
// app.use(require("./routes"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/plague-docs-copy",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
