import { FC } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header: FC = () => {
    return (
        <header className="header">
            <Link to="/" className="logo">My App</Link>
            <input className="side-menu" type="checkbox" id="side-menu" />
            <label className="hamb" htmlFor="side-menu"><span className="hamb-line"></span></label>

            <nav className="nav">
                <ul className="menu">
                    <li><Link className="active" to="/">Home</Link></li>
                    <li><Link to="/items">Items</Link> </li>
                    <li><Link to="/events">Events</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
