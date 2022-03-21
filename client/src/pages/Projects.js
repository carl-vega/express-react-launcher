import styles from "./styles.module.css"
import { basic, fight, responsive, word } from "../images/index.js"
import { useQuery } from '@apollo/client';
import { QUERY_PROJECTS } from "../utils/queries";
import Project from "../components/Project"


export default function Projects() {
    const { loading, error, data } = useQuery(QUERY_PROJECTS);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <>
            <section className={styles.projectSection}>
                <h1>
                    <span>
                        <span>
                            <span>
                                projects
                            </span>
                        </span>
                    </span>
                </h1>
                <ul>
                    {data.projects.map(({ _id, title, description, repository, live, image }) => (<Project key={_id} title={title} description={description} repository={repository} live={live} image={image} pinned={false} />))}
                </ul>
            </section>
        </>
    )
}


