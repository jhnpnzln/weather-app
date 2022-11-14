import React from "react";
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./logout";

export function Navbar() {
  const {isAuthenticated} = useAuth0()
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <FontAwesomeSvgIcon icon={faCloud} className="navbar-icon"/>
        <span className={isAuthenticated ? `navbar-app-name` : null}> Weather Forecast</span>
      </a>
      <Logout />
    </nav>
  );
}
