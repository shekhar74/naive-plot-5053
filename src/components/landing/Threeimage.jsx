import React from 'react'
import "./component.css"
import {Box, Flex } from '@chakra-ui/react'

const product = [{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1660750108/jz08mvqeojucvkyjexm3.jpg",
    category:"RECENT",
    name:"MALL RATS FOREVER: DIESEL FW22",
    description:"Fashion | Aug 19",
    id:3
},
{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1660662277/sggfapw6squijn8nyxsp.jpg",
    category:"RECENT",
    name:"JANIE KORN’S CANDLE-COPIA",
    description:"Art | Aug 18", 
    id:4
},
{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1660660109/gw75dqwri2cggj0thxwo.jpg",
    category:"RECENT",
    name:"Breathe Easy: Future-Past Escapism with Breath of the Wild",
    description:"Culture | Aug 16",
    id:5 
}]


const Threeimage = (props) => {
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
export default Threeimage