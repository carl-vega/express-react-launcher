// package imports
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/projects">projects</Link>
                    </li>
                    <li>
                        <Link to="/message">About</Link>
                    </li>
                    <li>
                        <Link to="/resume">About</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
