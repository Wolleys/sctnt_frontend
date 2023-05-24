import { FC } from "react";
import "./searchBox.css";

const SearchBox: FC = () => {
    return (
        <div className="search-box">
            <input type="text" className="input-field" placeholder="Search here..." />
        </div>
    );
};

export default SearchBox;
