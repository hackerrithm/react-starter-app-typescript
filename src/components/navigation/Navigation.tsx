import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
    <ul>
        <li>
            <Link to="/">Start</Link>
        </li>
        <li>
            <Link to="/users">Users</Link>
        </li>
    </ul>
);

export default Navigation;