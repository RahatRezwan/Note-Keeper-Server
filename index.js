const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
   res.send("Note Keeper Server is Running");
});

/* Mongodb connection */
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@notekeepercluster.pmxpg3o.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   serverApi: ServerApiVersion.v1,
});

const run = async () => {
   try {
      /* create a database */
      const database = client.db("noteKeeper");
      /* create collection inside the db */
      const usersCollection = database.collection("users");
      const notesCollection = database.collection("notes");
   } finally {
   }
};
run().catch((e) => console.error(e));

app.listen(port, () => {
   console.log(`Server is running on port: ${port}`);
});
