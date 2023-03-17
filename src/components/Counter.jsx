import React from 'react';

const Counter = () => {
  const [likes, setLikes] = React.useState(0)
  
  const incrF = () => {
    setLikes(prev => prev + 1)
  }
  
  const DecrF = () => {
    setLikes(prev => prev - 1)
  }
  return (
    <div>
      <h1>{likes}</h1>
      <button onClick={incrF}>Increment</button>
      <button onClick={DecrF}>Decrement</button>
    </div>
  );
};

export default Counter;