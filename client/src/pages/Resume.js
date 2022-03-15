import styles from "./styles.module.css"

export default function Resume() {
    return (
        <>
            <section className={styles.resumeSection}>
                <header>
                    <h1>
                        <span>
                            <span>
                                <span>
                                    resume
                                </span>
                            </span>
                        </span>
                    </h1>
                </header>
                <div>
                    <span>
                        <h2>ABOUT</h2>
                        <ul className="list-none">
                            <li>As a dynamic full stack developer who loves to help others, I seek a position where I can grow with a team and put my coding skills to good use.</li>
                        </ul>
                        <h2>SKILLS</h2>
                        <ul className="list-none">
                            <li><strong>CLIENT SIDE</strong></li>
                            <li>React.js</li>
                            <li>CSS</li>
                            <li>HTML</li>
                            <li>JavaScript</li>
                            <li>&nbsp;</li>
                            <li><strong>SERVER SIDE</strong></li>
                            <li>Node.js</li>
                            <li>Handlebars</li>
                            <li>Heroku</li>
                            <li>REST and JSON</li>
                            <li>&nbsp;</li>
                            <li><strong>DATABASE</strong></li>
                            <li>GraphQL</li>
                            <li>SQL</li>
                            <li>Sequelize</li>
                            <li>MongoDB</li>
                            <li>Firebase</li>
                            <li>&nbsp;</li>
                            <li><strong>TOOLS</strong></li>
                            <li>VS Code</li>
                            <li>Git</li>
                            <li>GitLab/GitHub</li>
                            <li>Chrome Debugger</li>
                        </ul>
                    </span>
                    <span>
                        <h2>EXPERIENCE</h2>
                        <p><strong>FULL STACK TEACHING ASSISTANT | TRILOGY EDUCATION</strong><br />APRIL 2019 - CURRENT</p>
                        <ul>
                            <li>Substitute as instructor to teach class as needed</li>
                            <li>Lead group training sessions on React.js, MySQL, Git, and other topics as they are requested</li>
                            <li>Hold office hours three times a week to answer students questions and help with their projects</li>
                            <li>Prepare for class by pushing up assignments and solutions to GitLab</li>
                            <li>Help student teams issue Pull Requests and manage merge conflicts</li>
                            <li>Create playground example apps to illustrate advanced concepts</li>
                            <li>Grade assignments via a roster, essentially a code review</li>
                            <li>Partner with instructional staff for curriculum planning</li>
                        </ul>
                        <p><strong>FULL STACK TUTOR | TRILOGY EDUCATION</strong><br />APRIL 2021 - CURRENT</p>
                        <ul>
                            <li>Regularly meet via Zoom/Calendly with students to answer deep dive technical questions about full stack course material</li>
                            <li>Mentor students who are struggling to help them catch up, and even get ahead of deadlines by learning how to prioritize and scope</li>
                            <li>Encourage students to adopt tools such as the Chrome inspector and debugger to build independent problem-solving skills</li>
                        </ul>
                        <h2>EDUCATION</h2>
                        <p><strong>CODING BOOTCAMP CERTIFICATION | FULL STACK | UNC CHAPEL HILL</strong><br />FEBRUARY 2019 - CURRENT</p>
                        <ul>
                            <li>Offered a teaching assistant position after excelling in the program, helping others, and being recommended by the instructor</li>
                        </ul>
                        <p><strong>FULL STACK TUTOR | TRILOGY EDUCATION</strong><br />APRIL 2021 - CURRENT</p>
                        <ul>
                            <li>Earned a two-year degree with electives including science/math: C++, Calculus 1-3, Chemistry</li>
                            <li>Decided to pursue coding bootcamp instead of a four-year degree to strategically focus education</li>
                        </ul>
                    </span>
                </div>
            </section>
        </>
    )
}
