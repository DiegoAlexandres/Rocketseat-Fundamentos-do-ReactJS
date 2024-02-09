import { Post } from './components/Post.jsx';
import { Header } from './components/Header.jsx';
import { Sidebar } from './components/Sidebar.jsx';

import styles from './App.module.css';
import './global.css';


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Diego Alexandre"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi dolorem sunt eligendi rem repellat iure esse, delectus distinctio velit ea ratione eius dolore inventore officia ipsam ipsum suscipit nemo quasi!"
          />
          <Post
            author="Alexandre"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi dolorem sunt eligendi rem repellat iure esse, delectus distinctio velit ea ratione eius dolore inventore officia ipsam ipsum suscipit nemo quasi!"
          />
          <Post
            author="Alexandre"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi dolorem sunt eligendi rem repellat iure esse, delectus distinctio velit ea ratione eius dolore inventore officia ipsam ipsum suscipit nemo quasi!"
          />
        </main>
      </div>

    </div>
  )
}

