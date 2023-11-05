import { Link } from "react-router-dom"
import SearchBar from "../SearchBar/searchBar"

export default function HomeBar(){
    return (
        <div className="homeBar">
            <Link to='/'>
                <img src="../Images/F1 FAN PAGE.png" id="homebt" />
            </Link>
            <div className="search">
                <SearchBar/>
            </div>
        </div>
    )
}