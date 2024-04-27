import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(){
    return(
        <article className= {styles.post}>
            <header>
                <div className={styles.author}>
                <img className={styles.avatar} src='https://github.com/Carlosomr.png'></img>
                <div className={styles.authorInfo}>
                    <strong>Carlos Eduardo</strong>
                    <span>Desenvolvedor Web</span>

                </div>
                </div>

                <time title='07 de abril de 2024 ás 11:20' dataTime="2024-04-07 11:20:00">Publicado há 1h   </time>
            </header>
            <div className= {styles.content}>
            <p>Fala galeraa 👋 </p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p><a href='#'>carlos.dev/doctorcare</a></p>

            <p> 
                <a href='#'>#novoprojeto</a>
                <a href='#'>#nlw</a> 
                <a href='#'>#rocketseat</a>
            </p>
            </div>

            <form className= {styles.comentForm}>
            <strong> Deixe seu feedback</strong>
            <textarea placeholder="Deixe o seu comentario" ></textarea>
            <footer>
            <button type='submit'>Comentar</button>
            </footer>
           
            </form>
            <div className={styles.commentList}>
                <Comment/>
            </div>
        </article>

        
    )
}