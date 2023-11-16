import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div className="navbar">
  {/*{code here}*/}
  <NavLink to="/">Home</NavLink>
  <NavLink to="/actors">Actors</NavLink>
  <NavLink to="/movies">Movies</NavLink>
  <NavLink to="/directors">Directors</NavLink>
  </div>;
}

export default NavBar;
