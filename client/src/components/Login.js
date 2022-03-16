import React, { useState } from 'react'
import styles from "./styles.module.css";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from "../utils/mutations";
import Auth from '../utils/auth';

export default function () {
    const [login, { error }] = useMutation(LOGIN_USER);
    const [formState, setFormState] = useState({ email: "", password: "" })
    const handleInputChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value })
    };
    const handleLogin = async (e) => {
        e.preventDefault()
        console.dir(formState)
        try {
            const { data } = await login({
                variables: { email: formState.email, password: formState.password },
            });
            console.log(data)
            const token = data.login.token;
            Auth.login(token);
        } catch (e) {
            console.log(e);
        }


    };
    return (
        <>
            <form className={styles.sideLogin}>
                <label htmlFor="email">email
                </label>
                <input type="text" value={formState.email} name="email" onChange={handleInputChange} />
                <label htmlFor="password">password
                </label>
                <input type="password" value={formState.password} name="password" onChange={handleInputChange} />
                <button type="submit" onClick={handleLogin}>login</button>
            </form>
        </>
    )
}
