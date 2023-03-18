import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
  const [post, setPost] = React.useState({title: '', body: ''})
  
  const inputTitleHandler = (event) => {
    setPost({...post, title: event.target.value})
  }
  
  const inputDescHandler = (event) => {
    setPost({...post, body: event.target.value})
  }
  
  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post,
      id: Date.now()
    }
    create(newPost)
    setPost({title: '', body: ''})
  }
  
  return (
    <form>
      <MyInput value={post.title} onChange={inputTitleHandler} type='text' placeholder='post title'/>
      <MyInput value={post.body} onChange={inputDescHandler} type='text' placeholder='post description'/>
      <MyButton onClick={addNewPost}>add post</MyButton>
    </form>
  );
};

export default PostForm;