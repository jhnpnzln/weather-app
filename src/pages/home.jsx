import React, { useEffect } from "react";
import SearchBar from "../components/searchBar";
import { useAuth0 } from "@auth0/auth0-react";

import NoDP from "../assets/images/no-dp.jpg";

export function HomePage() {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="home-container">
        <div className="home-header">
          <div className="home-avatar">
            {user.picture !== "" ? (
              <img src={user.picture} alt="avatar" className="home-avatar" />
            ) : (
              <img src={NoDP} className="home-avatar" />
            )}
          </div>
          <div className="home-user-info">
            <h2>{user.name === "" ? user.nickname : user.name}</h2>
            <a href={`https://github.com/${user.nickname}`} target="_blank">
              https://github.com/{user.nickname}
            </a>
          </div>
        </div>
        <div className="home-body">
          <SearchBar placeHolder="Enter City" />
        </div>
      </div>
    )
  );
}
