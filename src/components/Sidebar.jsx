import styles from './Sidebar.module.css';
import {PencilLine} from 'phosphor-react'
export function Sidebar(){
    return (
        <aside className={styles.Sidebar}>
            <img className=  {styles.cover}
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
            
            <div className={styles.profile}>
            <img className= {styles.avatar} 
            src='https://avatars.githubusercontent.com/u/142277959?v=4'></img>

                <strong>Carlos Eduardo</strong>
                <span>Desenvolvedor web</span>
             </div>

            <footer>
                <a href="#">
                    <PencilLine />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}