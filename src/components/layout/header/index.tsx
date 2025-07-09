import Location from "./Location";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="lg:fixed z-[1000]">
      <div className="hidden lg:block">
        <Location></Location>
      </div>
      <SearchBar></SearchBar>
    </div>
  );
};

export default Header;
