import React from 'react';

import Rcb from './Images/rcb.png';
import Csk from './Images/csk.png';
const Tasktwo = () =>{
    return(
      <>
      
      <div className="back">
      <h1 className="text">Super Over League</h1>
        <div className="pic">
        
      <img src={Rcb} className="rcb" alt="..." />
      
      <img src={Csk} className="csk" alt="..." />
      </div></div>
      </>
    )
  }
  export default Tasktwo;