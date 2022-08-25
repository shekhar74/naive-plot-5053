import React from 'react'
import Twoimage from './Twoimage'
import Threeimage from './Threeimage'
import Twoimage1 from './Twoimage1'
import Fourthdivgallery from './fourthdivgallery'
import Articles from "../Articles/Articles"
 import Twoimage2 from './Twoimage2'
 import Threeimage1 from './Threeimage1'
 import EightdivGallery from './EightdivGallery'
 import Twoimage3 from './Twoimage3'
 import Threeimage2 from './Threeimage2'
import Navbar from '../navbar/Navbar'
import Sixthdiv from './Sixthdiv'
import Footer from "../Footer/Footer"


const Landing = (props) => {
    return (
        <>
        <Navbar />
        <div>
          
            <Twoimage/>
             <Threeimage/>
            <Twoimage1/>
           <Fourthdivgallery />
             <Articles/>
            <Twoimage2/>
             <Sixthdiv/>
            <Threeimage1/>
            <EightdivGallery/>
            <Twoimage3/>
            <Threeimage2/> 
            
        </div>
        <Footer />
        </>
    )
}

export default Landing