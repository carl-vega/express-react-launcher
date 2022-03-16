import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import styles from "./styles.module.css";
import { ADD_USER } from "../utils/mutations";
import Auth from '../utils/auth';

export default function Signup() {
    const [formState, setFormState] = useState({ email: "", password: "", username: "" })
    const [addUser, { loading, error }] = useMutation(ADD_USER);
    const handleInputChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value })
    };


    const handleSignup = async (e) => {
        e.preventDefault();
        console.dir(formState)
        try {
            const { data } = await addUser({
                variables: { username: formState.username, email: formState.email, password: formState.password },
            });
            console.log(data)
            const token = data.addUser.token;
            Auth.login(token);
        } catch (e) {
            console.log(e);
        }

    }
    return (
        <>
            <form className={styles.sideSignup}>
                <label htmlFor="username">username
                </label>
                <input type="text" value={formState.username} name="username" onChange={handleInputChange} />
                <label htmlFor="email">email
                </label>
                <input type="text" value={formState.email} name="email" onChange={handleInputChange} />
                <label htmlFor="password">password
                </label>
                <input type="password" value={formState.password} name="password" onChange={handleInputChange} />
                <button type="submit" onClick={handleSignup}>signup</button>
            </form>
        </>
    )
}
