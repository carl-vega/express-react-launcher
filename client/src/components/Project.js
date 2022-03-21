import styles from "./styles.module.css"
import { repository_icon, live_icon } from "../images/index.js"

export default function Project({ id, title, description, repository, live, image, pinned }) {
    return (
        <>
            <li className={pinned ? styles.pinned : ""}>
                <header>
                    <img src={image} alt={title} />
                    <span>{title}</span>
                </header>
                {description.map((pData, index) => <p key={index}>{pData}</p>)}
                <a href={live}><img src={live_icon} alt="live icon" /></a>
                <a href={repository}><img src={repository_icon} alt="repository icon" /></a>
            </li>
        </>
    )
}
