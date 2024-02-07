import styles from './Post.module.css';

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/DiegoAlexandres.png"/>  
                    <div className={styles.authorInfo}>
                    <strong>Diego Alexandre</strong>
                    <span>Dev Full Stack</span>
                    </div> 
                </div>

                <time title='06 de Fevereiro às 21:00h' dateTime='2024-02-06 21:00:00'>Públicado há 1h</time>
            </header>

            <div className={styles.contents}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p> 👉 <a href="">jane.design/doctorcare</a> </p>
                <p> <a href="">#novoprojeto #nlw #rocketseat</a> </p>
            </div>
        </article>
    )
}