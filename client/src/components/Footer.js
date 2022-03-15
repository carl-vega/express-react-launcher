// package imports
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import github from "../images/GitHub-Mark-120px-plus.png"
import linkedin from "../images/LI-In-Bug.png"
// import indeed from "../images/Indeed_2021_Logo_RGB_Blue.svg"
import twitter from "../images/2021-Twitter-logo-blue.png"

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <ul>
                    <li>
                        <Link target={"_blank"} to={"message"} onClick={(event) => { event.preventDefault(); window.open("https://github.com/carl-vega"); }}><img src={github} alt="GitHub logo" /></Link>
                        {/* onClick={(event) => {event.preventDefault(); window.open(this.makeHref("Your_route"));}} */}
                    </li>
                    <li>
                        <Link target={"_blank"} to={"message"} onClick={(event) => { event.preventDefault(); window.open("https://www.linkedin.com/in/carl-vega/"); }}><img src={linkedin} alt="LinkedIn logo" /></Link>
                    </li>
                    <li>
                        <Link target={"_blank"} to={"message"} onClick={(event) => { event.preventDefault(); window.open("https://twitter.com/Carljasonvega"); }}><img src={twitter} alt="Indeed logo" /></Link>
                    </li>
                    {/* <li>
                        <Link target={"_blank"} to={"message"} onClick={(event) => { event.preventDefault(); window.open("https://github.com/carl-vega"); }}><img src={github} alt="GitHub logo" /></Link>
                    </li> */}
                </ul>
            </footer>
        </>
    )
}
