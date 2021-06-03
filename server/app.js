const fetch = require("node-fetch");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
require("dotenv").config();
const db = require("./firebase");
app.use(express.json());

const GOOGLE_KEY = process.env.REACT_APP_google_key;

const newFetch = (title) => {
  const url = new URL("https://www.googleapis.com/books/v1/volumes");
  url.searchParams.append("key", GOOGLE_KEY);
  url.searchParams.append("q", title + " intitle");

  return fetch(url)
    .then((resp) => {
      return resp.json();
    })
    .then((obj) => {
      return obj.items;
    });
};

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello! world");
});

app.get("/search", async (req, res) => {
  let titleReq = req.query.title;

  let data = await newFetch(titleReq);

  res.json(data);
});

app.get("/library", async (req, res) => {
  const libraryRef = db.collection("library");
  const snapshot = await libraryRef.get();
  const info = [];

  console.log("read");

  snapshot.forEach((doc) => {
    let mod = doc.data();
    mod.id = doc.id;

    info.push(mod);
  });

  res.json(info);
});

app.post("/add", async (req, res) => {
  const resp = await db.collection("library").add(req.body);

  res.sendStatus(200);
});

app.delete("/delete", async (req, res) => {
  const { id } = req.body;

  const resp = await db.collection("library").doc(id).delete();

  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
