import React, { useEffect, useState } from "react";
import Book from "./book";

function LibraryApp() {
  const [data, setData] = useState([]);

  const [remove, setRemove] = useState(false);

  const newFetch = () => {
    const url = new URL("http://localhost:8000/library");

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((obj) => {
        setData(obj);
      });

    setRemove(!remove);
  };

  useEffect(() => {
    newFetch();
  }, [remove]);

  const callback = () => {
    newFetch();
  };

  const bookList = () => {
    return data.map((bk) => {
      return (
        <Book
          author={bk.authors}
          title={bk.title}
          description={bk.description}
          image={bk.imageLinks}
          data={bk}
          action={"delete"}
          callback={callback}
        ></Book>
      );
    });
  };

  return (
    <div>
      <div className="navbar">
        <img
          src="./libraryicon.png"
          alt="library icon"
          style={{ height: "10%", width: "10%", marginTop: "1vh" }}
        />
      </div>
      <div>{bookList()}</div>
    </div>
  );
}

export default LibraryApp;
