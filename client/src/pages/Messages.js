import React, { useState } from 'react'
import styles from "./styles.module.css"
import { useMutation, useQuery } from '@apollo/client';
import { ADD_MESSAGE } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries";
import Auth from '../utils/auth';
export default function Message() {
    const [loggedIn, setLoggedIn] = useState(Auth.loggedIn())
    const { loading, data, refetch } = useQuery(QUERY_ME);
    const [addMessage, { error }] = useMutation(ADD_MESSAGE);
    const [formState, setFormState] = useState({ body: "" })
    const user = data?.me || {};
    const handleInputChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        setFormState({ [name]: value })
    };
    const handleMessage = async (e) => {
        e.preventDefault()
        console.log(formState)
        try {

            if (Auth.loggedIn()) {
                const { data } = await addMessage({
                    variables: { body: formState.body },
                });
                if (data) {
                    refetch()
                    setFormState({ body: "" })
                }
            }
            setLoggedIn(Auth.loggedIn())
        } catch (e) {
            console.log(e);
        }

    };
    const formatDate = (date) => {
        const event = new Date(Number(date));
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: "numeric", minute: "numeric" };
        return event.toLocaleDateString(undefined, options)
    };

    return (
        <>
            <section className={styles.messageSection}>
                <h1>
                    <span>
                        <span>
                            <span>
                                message
                            </span>
                        </span>
                    </span>
                </h1>
                <div>
                    <ul>
                        {loggedIn ? user.messages.map(({ _id, body, sentAt, reply }) => {
                            return (
                                <>
                                    <li key={_id}>
                                        {body} ~ {formatDate(sentAt)}
                                    </li>
                                    {reply ? <li className={styles.reply}>{reply}</li> : <></>}
                                </>
                            )
                        }) : <li>You haven't sent any messages yet.</li>}
                    </ul>
                    <span>
                        <textarea placeholder={loggedIn ? "hey" : "use the sidenav to login or signup"} value={formState.body} name="body" onChange={handleInputChange}></textarea>
                        <button onClick={handleMessage}><span>⟿</span></button>
                    </span>
                </div>
            </section>
        </>
    )
}
