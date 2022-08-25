import React from 'react'
import "./component.css"
import {Box, Flex } from '@chakra-ui/react'
import Menswear  from "../products/Menswear";

const product = [{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1661177550/rxqgd9oi0uc16vkjnkca.jpg",
    category:"Featured",
    name:"GUCCI",
    description:"SHOP MENSWEAR",
    id:6
},
{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1661177554/fyclk90vhytlstivxhsu.jpg",
    category:"Featured",
    name:"GUCCI",
    description:"SHOP WOMENSWEAR", 
    id:7
}]


const Twoimage1 = (props) => {
    return (
        <Flex margin="auto" padding="10px 40px">
           {product.map((elem)=>{ return (
               <Box width="100%" padding="0px 1.5%" key={elem.id}>
                   <div>
                       <img src={elem.img} alt={elem.name}/>
                    </div>
                   <div className='category'>
                       <span className='feature'>{elem.category}</span>
                       <span className='name'>{elem.name}</span>
                   </div>
                   <div>
                   <button id='twoonebutton' onClick={<Menswear />} className='desc'>{elem.description}</button>
                   </div>
               </Box>
           )
           })}
        </Flex>
    )
}
export default Twoimage1