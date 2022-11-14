import SearchBar from "../components/searchBar";
import Buttons from "../components/button";
export function HomePage() {
  return (
    <div className="home-container">
        <div className="home-header">
            <label htmlFor="">John Smith</label>
            <p>https://github.com/smithjohn</p>
        </div>
        <div className="home-body">
            <SearchBar placeHolder="Enter City" />
            <Buttons text="Display Weather" />
        </div>
    </div>
  );
}
