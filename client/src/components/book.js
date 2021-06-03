import React from "react";
import { Button, Typography } from "@material-ui/core";
import AddBook from "./addBook";
import DeleteBook from "./deleteBook";

function Book(props) {
  function authorName() {
    if (!props.author) {
      return "Unknown";
    } else {
      return props.author[0];
    }
  }

  function imageDisplay() {
    if (!props.image) {
      return null;
    } else {
      return props.image.thumbnail;
    }
  }

  const handleClick = () => {
    if (props.action == "add") {
      AddBook(props.data);
    } else if (props.action == "delete") {
      DeleteBook(props.data.id);
      props.callback();
    }
  };

  return (
    <div className="container">
      <div className="left">
        <img src={imageDisplay()} alt="book image" />
      </div>
      <div className="vertical">
        <div className="bookinfo">
          <div style={{ width: "65vw" }}>
            <Typography variant="h6">{props.title}</Typography>
            <Typography>
              Author{": "}
              {authorName()}
            </Typography>
          </div>
          <div style={{ width: "5vw" }}>
            <Button
              onClick={() => {
                handleClick();
              }}
            >
              {props.action}
            </Button>
          </div>
        </div>
        <div>
          <Typography style={{ fontSize: "80%", height: "120px" }}>
            {props.description}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Book;
