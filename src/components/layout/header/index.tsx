import React from "react";
import Location from "./Location";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <Location></Location>
      </div>
      <SearchBar></SearchBar>
    </div>
  );
};

export default Header;
