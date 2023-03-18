import React, {createRef} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./styles/usePost";

function App() {
  
  const [posts, setPosts] = React.useState([
    {id: 1, title: 'Java Script', body: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.'},
    {
      id: 2,
      title: 'SQL',
      body: 'Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
      nodeRef: createRef()
    },
    {
      id: 3,
      title: 'PHP',
      body: 'В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.',
      nodeRef: createRef()
    },
    {
      id: 4,
      title: 'CSS',
      body: 'Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.',
      nodeRef: createRef()
    },
    {
      id: 5,
      title: 'Redux',
      body: 'Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
      nodeRef: createRef()
    }]
  )
  
  const [filter, setFilter] = React.useState({sort: '', find: ''})
  const [modal, setModal] = React.useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.find)
  
  const createPost = (newPost) => {
    if (!newPost.title || !newPost.body) return
    setPosts(prev => [...prev, newPost])
    setModal(false)
  }
  
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  
  return (
    <div className="App">
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
        create post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: '20px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'My posts'}/>
    </div>);
}

export default App;



