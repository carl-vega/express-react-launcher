import styles from "./styles.module.css";
import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";


export default function SideNav({ width, closeSidenav, name, loggedIn, border }) {
    const [checked, setChecked] = useState(false);

    return (
        <>
            <div style={{ width: width, borderRight: border }} className={styles.sidenav}>
                <a href="#" className={styles.closebtn} onClick={closeSidenav}>&times;</a>
                {loggedIn ?
                    <a href="#">{name}</a> :
                    <div className={styles.switch}>
                        <span>signup</span>
                        <label >
                            <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                            <span className={styles.slider}></span>
                        </label>
                        <span>login</span>
                    </div>
                }
                {checked ?
                    <Login />
                    :
                    <Signup />
                }

            </div>
        </>
    )
}
