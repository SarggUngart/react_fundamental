import React from 'react';
import s from './MyInput.module.css'

const MyInput = React.forwardRef((props, ref) => {
  // console.log(props)
  return (
    <input ref={ref} className={s.myInput} {...props}/>
  );
})

export default MyInput;