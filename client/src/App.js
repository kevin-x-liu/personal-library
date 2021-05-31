import React from "react";
import SearchApp from "./components/search";
import LibraryApp from "./components/library";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navBar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <Switch>
          <Route path="/search" component={SearchApp} />
          <Route path="/library" component={LibraryApp} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
