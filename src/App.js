import React from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

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
  const [search, setSearch] = React.useState('')
  
  
  const sortedPosts = React.useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }, [selectedSort, posts])
  
  const sortedAndSearchedPosts = React.useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()))
  }, [search, sortedPosts])
  
  const createPost = (newPost) => {
    if (!newPost.title || !newPost.body) return
    setPosts(prev => [...prev, newPost])
  }
  
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  
  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }
  
  return (
    <div className="App">
      
      <PostForm create={createPost}/>
      <hr style={{margin: '20px 0'}}/>
      
      
      <MyInput
        placeholder={'Search'}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue='sort by'
        options={[{value: 'title', name: 'by title'},
          {value: 'body', name: 'by description'}]}/>
      {posts.length
        ?
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'My posts'}/>
        :
        <h1 style={{textAlign: 'center'}}>Посты не обнаруженны</h1>
      }
    </div>);
}

export default App;



