import React from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  
  const [posts, setPosts] = React.useState([
    {id: 1, title: 'Java Script', body: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.'},
    {id: 2, title: 'SQL', body: 'Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'},
    {
      id: 3,
      title: 'PHP',
      body: 'В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.'
    },
    {
      id: 4,
      title: 'CSS',
      body: 'Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.'
    },
    {
      id: 5,
      title: 'Redux',
      body: 'Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.'
    },]
  )
  
  const [selectedSort, setSelectedSort] = React.useState('')
  
  
  const createPost = (newPost) => {
    setPosts(prev => [...prev, newPost])
  }
  
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  
  const sortPost = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }
  
  return (<div className="App">
    <PostForm create={createPost}/>
    <hr style={{margin: '20px 0'}}/>
    <MySelect
      value={selectedSort}
      onChange={sortPost}
      defaultValue={'sort by'}
      options={[
        {value: 'title', name: 'by title'},
        {value: 'body', name: 'by description'}
      ]
      }/>
    {posts.length
      ?
      <PostList remove={removePost} posts={posts} title={'My posts'}/>
      :
      <h1 style={{textAlign: 'center'}}>Посты не обнаруженны</h1>
    }
  </div>);
}

export default App;



