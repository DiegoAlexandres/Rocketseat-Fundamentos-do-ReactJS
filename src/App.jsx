import { Post } from './Post.jsx';
import { Header } from './components/Header.jsx';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Diego Alexandre"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi dolorem sunt eligendi rem repellat iure esse, delectus distinctio velit ea ratione eius dolore inventore officia ipsam ipsum suscipit nemo quasi!"
      />
      <Post
        author="João"
        content="Meu primeiro post"
      />
    </div>
  )
}

