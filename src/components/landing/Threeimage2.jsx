import React from 'react'
import "./component.css"
import {Box, Flex } from '@chakra-ui/react'

const product = [{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1658417335/tmp9tsdbhiu58qnvyzck.jpg",
    category:"RECENT",
    name:"Ways of Seeing with Campbell Addy",
    description:"Fashion | Jul 27",
    id:3
},
{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1658771043/dfymv2izg4mo0chkvi3b.jpg",
    category:"RECENT",
    name:"LILYPAD MAGAZINE CAN KEEP A SECRET",
    description:"Art | Jul 25", 
    id:4
},
{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1658237094/f9njqxnkhebxldkyifm3.jpg",
    category:"RECENT",
    name:"SMALL REVOLUTIONS WITH JOSHUA P. MATTHEWS",
    description:"Culture | Jul 22",
    id:5 
}]


const Threeimage2 = (props) => {
    return (
        <Flex margin="auto" padding="10px 40px">
           {/* <h1>Twoimage</h1>  */}
           {product.map((elem)=>{ return (
               <Box width="100%" padding="0px 1.5%" key={elem.id}>
                   <div className='image'>
                       <img src={elem.img} alt={elem.name}/>
                    </div>
                    <div>
                   <div className='category'>
                       <span>{elem.category}</span>
                       <span className='name'>{elem.name}</span>
                   </div>
                   
                   <p className='desc'>{elem.description}</p>
                   </div>
               </Box>
           )
           })}
        </Flex>
    )
}
export default Threeimage2