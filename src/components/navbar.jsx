import React from "react";
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import Logout from "./logout";

export function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <FontAwesomeSvgIcon icon={faCloud} /> Weather Forecast
      </a>
      <Logout />
    </nav>
  );
}
