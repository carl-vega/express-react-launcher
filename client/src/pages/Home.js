import styles from "./styles.module.css"

export default function Home() {
    return (
        <>
            <section className={styles.homeSection}>
                <header>
                    <h1 className={styles.homeH1}>
                        <span>Welcome</span><span>Carl Vega</span><span>to</span>
                    </h1>
                </header>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates natus odit vel similique molestias neque quas quod dignissimos voluptatem architecto quis possimus, corporis eos ea placeat voluptate beatae. Harum, laborum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nulla necessitatibus nostrum quibusdam molestiae, libero sint corporis, ab aliquid inventore pariatur in alias molestias voluptatem sit fugiat, accusamus ratione ducimus dignissimos quidem porro. Hic exercitationem repudiandae in aliquam earum laudantium, eum dicta aliquid assumenda quis vitae, voluptatem recusandae nisi aut!
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, ducimus? Dignissimos, numquam. Sequi debitis provident quod eum repudiandae accusamus, nemo, suscipit aperiam rerum numquam reiciendis. Soluta similique doloribus corporis veritatis repellendus? Repudiandae magni voluptas fugit minima at ad, molestias in?
                    </p>
                </div>
            </section>
        </>
    )
}
