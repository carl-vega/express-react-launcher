// package imports
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css"
import { login } from "../images"

export default function Navbar({ openSidenav }) {
    const active = "active"
    return (
        <>
            <nav className={styles.navbar}>
                <a href="#" onClick={openSidenav}><img src={login} /></a>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? active : undefined
                            }
                        >
                            carl.vega
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                isActive ? active : undefined
                            }
                        >
                            projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/message"
                            className={({ isActive }) =>
                                isActive ? active : undefined
                            }
                        >
                            message
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/resume"
                            className={({ isActive }) =>
                                isActive ? "active" : undefined
                            }
                        >
                            resume
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}
