import './search.css';
import icon_search from "../assets/search_black_24dp.svg"

const Search = () => {
    return <div className="search">
        <img src={icon_search} alt="search"></img>
        <input placeholder="Search"></input>
    </div>
}

export default Search