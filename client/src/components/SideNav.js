import styles from "./styles.module.css";
import React, { useState } from "react";

export default function SideNav({ width, closeSidenav, name, loggedIn, border }) {
    const [checked, setChecked] = useState(false)
    return (
        <>
            <div style={{ width: width, borderRight: border }} className={styles.sidenav}>
                <a href="#" className="closebtn" onClick={closeSidenav}>&times;</a>
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
                    <form className={styles.sideLogin}>
                        <label htmlFor="email">email
                        </label>
                        <input type="text" name="email" />
                        <label htmlFor="password">password
                        </label>
                        <input type="password" name="password" />
                    </form>
                    :
                    <form className={styles.sideSignup}>
                        <label htmlFor="username">username
                        </label>
                        <input type="text" name="username" />
                        <label htmlFor="email">email
                        </label>
                        <input type="text" name="email" />
                        <label htmlFor="password">password
                        </label>
                        <input type="password" name="password" />
                    </form>

                }

            </div>
        </>
    )
}
