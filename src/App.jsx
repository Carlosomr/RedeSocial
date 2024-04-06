
import { Header } from './components/Header';
import { Post } from './Post';
import style from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';
export function App() {
  return (
   
   <div>
     <Header />
    <div className= {style.wrapper}>
      <Sidebar />
      <main>
      <Post
      author="Carlos Eduardo" 
      content="conteudo"
    />
  
      </main>
    </div>


    </div>
)


}

