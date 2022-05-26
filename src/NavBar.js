import React, {useState} from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

function NavBar() {
    const [activeIndex, setActiveIndex] = useState("home");
    return (
        <React.Fragment>
            <div className="nav-bar">
                <div className="logo">
                    <p>Invedus</p>
                </div>
                <ul className="nav-list">
                    <li className={activeIndex === "home" ? "active" : ""} onClick={() => setActiveIndex("home")}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={activeIndex === "Create" ? "active" : ""} onClick={() => setActiveIndex("Create")}>
                        <Link to="/create">Create</Link>
                    </li>
                </ul>
                <div className="user-icon">
                    Shakher Chauhan
                    <span className="initial">
                        SC
                    </span>

                </div>
            </div>
        </React.Fragment>
    );
}

export default NavBar;