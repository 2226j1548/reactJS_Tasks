import React from 'react';
import Pro from './Images/profile.png';
import Watch from './Images/watch.png';

const Taskone = () =>{
  return(
    <>
    
    <div className="bg">
    <h1 className="txt">Congratulations</h1>
      <div className="set">
      
    <img src={Pro} className="pro" alt="..." />
    
    <h2 className="name">kiran V</h2>
    <p className="name1">Vishnu instute of Computer Education and Technology<br/>,Bhimavaram</p>
    
    <img src={Watch} className="wat" alt="..." />
    </div></div>
    </>
  )
}
export default Taskone;
