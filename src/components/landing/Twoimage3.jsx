import React from 'react'
import "./component.css"
import {Box, Flex } from '@chakra-ui/react'
import Menswear  from "../products/Menswear";

const product = [{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1660571740/toyiipdkqztmo8kxsg2y.jpg",
    category:"Featured",
    name:"VEERT",
    description:"SHOP MENSWEAR",
    id:6
},
{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1660569715/mj9ixpdxxbtxq4qvng8l.jpg",
    category:"Featured",
    name:"CHLOE EYEWEAR",
    description:"SHOP WOMENSWEAR", 
    id:7
}]


const Twoimage3 = (props) => {
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
export default Twoimage3