import SearchBar from "../components/searchBar";
export function HomePage() {
  return (
    <div className="home-container">
        <div className="home-header">
            <label htmlFor="">John Smith</label>
            <p>https://github.com/smithjohn</p>
        </div>
        <div className="home-body">
            <SearchBar placeHolder="Enter City" />
        </div>
    </div>
  );
}
