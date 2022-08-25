import "./navbar.css"
import React from 'react'
 import { Link } from 'react-router-dom';

 const Navbar=()=>{
//  const [click, setClick] =useState(false);

//  const handleClick =()=>setClick(!click);
 
   return (
     <>
     <nav className='navbar'>
 
         <ul className='navbar_list'>
             <li className='left_of_navbar'>
                 <Link to='/menswear'  className='navshort'>
                     MENSWEAR
                 </Link>
                 <Link to='/womenswear'  className='navshort'>
                     WOMENSWEAR
                 </Link>
                 <Link to='/everything'  className='navshort'>
                     EVERYTHINGELSE
                 </Link>
                 <Link to='/'
                  className='navshort'
                  >
                     SEARCH
                 </Link>
             </li>
             <li>
             <Link to='/'  className='navshort'>
             <img id="logo" src="https://res.cloudinary.com/ssenseweb/image/upload/v1471963917/web/ssense_logo_v2.svg" alt="error"/>
         </Link>
             </li>
             <li className='right_of_navbar'>
             <Link to='/'  className='navshort' id='language'>
                <span>ENGLISH</span>
                 <ul className='drop_down'>
                         <li>
                             FRANCHIES
                         </li>
                         <li>日本語</li>
                         <li>中文</li>
                         <li>한국어</li>
                     </ul>
                     
                 </Link>
                 <Link to='/login'  className='navshort'>
                 LOGIN
                 </Link>
                 <Link to='/' className='navshort'>
                 WISHLIST
                 </Link>
                 <Link to='/checkout'  className='navshort'>
                     SHOPPING BAG (0)
                 </Link>
             </li>
         </ul>
        
       
     </nav>
   
     </>
   )
 }
export default Navbar