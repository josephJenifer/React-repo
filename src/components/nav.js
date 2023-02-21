import React from "react";
import { Link } from "react-router-dom";
import "../App.css"
export const Nav = () => {
    return (
        <div>
            <h1 className="launcher">Game Launcher</h1>

            <div className="nav-container">
                <Link className="nav-link" to="/" >Home</Link>
                <Link className="nav-link" to="/app" >Store</Link>
          

            </div>
        </div>
    )
}