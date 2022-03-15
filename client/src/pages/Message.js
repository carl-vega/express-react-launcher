import styles from "./styles.module.css"

export default function Message() {
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
                        <li>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, accusantium?
                        </li>
                        <li>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, accusantium?
                        </li>
                    </ul>
                    <span>
                        <textarea placeholder="hey"></textarea>
                        <button><span>⟿</span></button>
                    </span>
                </div>
            </section>
        </>
    )
}
