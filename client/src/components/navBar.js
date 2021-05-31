import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

function Navbar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar className="navbar">
          <Link to="/search" className="link">
            <SearchIcon />
          </Link>
          <Link to="/library" className="link">
            <LibraryBooksIcon />
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
