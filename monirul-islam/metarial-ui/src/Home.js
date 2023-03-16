import * as React from 'react';
import img1 from './Images/portfolio.png';
import img2 from './Images/1.jpg';
import { padding } from '@mui/system';

 const Home=() =>{
  return (
    <div style={{width:"100%",textAlign:"center" ,backgroundColor:"lightcyan"}}>


     <div className="overflow">
     <img src="https://demo.acmethemes.com/portfolio-web/wp-content/uploads/2019/01/computer-1149148_1920.jpg" style={{width:"250px",height:"250px",padding:"20px"}} alt="img 2" className="card-img-top"/>
 
   </div>
   <div className='card-body text-dark' style={{width:"300px"}}>
   <h4 className='card-title'>Card Title</h4>
   <p className='card-text text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing el sed dhyjuo eiusmod in dunt ut labore et dolore magna aliqua. Ut enim ahyuihd minim veniam, quihs nos trud exercitation ullamco laboris nisi ut aliquip excommodo consequat. Duihys aute irure dolor ineniyht hgtyul.
       </p>
     </div>

   </div>
  );
}
export default Home;