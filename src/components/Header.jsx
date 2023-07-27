import React from "react";
import { Link } from "react-router-dom";

const Header = ()=>{
    return (
        <>
            <div>
                <h1>Welcome</h1>
            </div>
            <div>
                <Link to="/">Main page</Link>
                <Link to="/favorites">Favorites</Link>
                <Link to="/ToDos">ToDo</Link>
                
            </div>
        </>
    )
}

export default Header