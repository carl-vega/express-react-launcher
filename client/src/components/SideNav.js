import styles from "./styles.module.css";
import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { useQuery } from '@apollo/client';
import { QUERY_ME } from "../utils/queries";
import Auth from '../utils/auth';


export default function SideNav({ width, closeSidenav, border }) {
    const [loggedIn, setLoggedIn] = useState(Auth.loggedIn());
    const [checked, setChecked] = useState(false);
    const { loading, data, refetch } = useQuery(QUERY_ME);
    const user = data?.me || {};
    const handleLogout = () => Auth.logout()

    return (
        <>
            <div style={{ width: width, borderRight: border }} className={styles.sidenav}>
                <a href="#" className={styles.closebtn} onClick={closeSidenav}>&times;</a>
                {loggedIn ?
                    <>
                        <div className={styles.loggedIn}>
                            <h2>{user.username}</h2>
                            <button onClick={handleLogout}>logout</button>
                        </div>
                    </>
                    :
                    <>
                        <div className={styles.switch}>
                            <span>signup</span>
                            <label >
                                <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                                <span className={styles.slider}></span>
                            </label>
                            <span>login</span>
                        </div>

                        {checked ?
                            <Login />
                            :
                            <Signup />
                        }
                    </>
                }

            </div>
        </>
    )
}
