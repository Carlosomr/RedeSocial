import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment(){
    return (
        <div className= {styles.comment}>
             <img src='https://github.com/Carlosomr.png'></img>

             <div className={styles.commentBox}> 
             <div className={styles.commentContent}>
                <header>
                    <div className= {styles.authorAndTime}>
                        <strong>Carlos Eduardo</strong>
                        <time title='07 de abril de 2024 ás 11:20' dataTime="2024-04-07 11:20:00">Cerca de 1h atrás  </time>
                    </div>
                    <button title='Deletar comentario'>
                        <Trash size={20}/>
                    </button>
                </header>
                <p>Muito bom Carlos, parabens </p>
             </div>
             <footer>
                <button>
                   <ThumbsUp/>
                   Aplaudir <span>20</span>
                </button>
             </footer>
             </div>
            
        </div>
    )
} 