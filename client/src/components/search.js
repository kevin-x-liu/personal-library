import React, { useState, useEffect } from "react";
import { Button, FormLabel, Input } from "@material-ui/core";
import Book from "./book";

function SearchApp() {
  const [title, setTitle] = useState("harry potter");

  const [data, setData] = useState([]);

  const newFetch = () => {
    const url = new URL("http://localhost:8000/search");

    url.searchParams.append("title", title);

    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((obj) => {
        setData(obj);
      });
  };

  useEffect(() => {
    newFetch();
  }, []);

  function resultList() {
    return data.map((res) => {
      return (
        <Book
          author={res.volumeInfo.authors}
          title={res.volumeInfo.title}
          description={res.volumeInfo.description}
          image={res.volumeInfo.imageLinks}
          data={res.volumeInfo}
          action={"add"}
        ></Book>
      );
    });
  }

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "2vh" }}>
        <FormLabel>
          Search book title{": "}
          <Input type="text" value={title} onChange={handleChange} />
        </FormLabel>
        <Button onClick={newFetch}>check</Button>
      </div>
      <div>{resultList()}</div>
    </div>
  );
}

export default SearchApp;
