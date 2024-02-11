import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'


export function Comment({ content }){
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/diegoalexandres.png"/>
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
                    <p>{content}</p>
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