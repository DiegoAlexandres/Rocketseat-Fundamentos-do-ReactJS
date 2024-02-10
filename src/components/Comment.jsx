import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'


export function Comment(){
    return (
        <div className={styles.comment}>
            <img className={styles.avatar} src="https://github.com/DiegoAlexandres.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Alexandre</strong>
                            <time title='06 de Fevereiro às 21:00h' dateTime='2024-02-06 21:00:00'>Cerca de 2h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>

        </div>
    )
}