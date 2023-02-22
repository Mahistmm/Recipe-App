import React from 'react'

const Pagination = ({ setCurrentpage }) => {
   
let pages = [];

let i = 0;

function previous (){
   if(i=>0){
    i=pages.length;
    i--;
    return setCurrentpage(i)
   }
}

function next(){
 if(i<=0){
 i=pages.length
  i++
  return setCurrentpage(i)
 }
}

  return (
    <div>
      {
      <button onClick={next()}>Next</button>
      }
      {
        <button onClick={previous()}>Previous</button>
      }
    </div>
  )
}

export default Pagination