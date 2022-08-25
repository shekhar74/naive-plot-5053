import React from 'react'
import "./component.css"
import {Box, Flex } from '@chakra-ui/react'

const product = [{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1661262990/gnevtuxq72dwprxvefzz.jpg",
    category:"Market",
    name:"BROWN NOISE RESET",
    description:"Chill Is a Vibe with Beats by Kim, Acne Studios, and Tekla",
    id:1
},
{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1661192855/atwzw9qn2cw6qhz9q7dx.jpg",
    category:"Culture",
    name:"A SURFBOARD CLUB AT THE TOP OF THE WORLD",
    description:"Stockholm (Surfboard) Club’s latest capsule finds pro surfer Alex Knost and artist Daniella Murphy taking inspiration from the sport’s past",
    id:2 
}]


const Twoimage = (props) => {
    return (
        <Flex margin="auto" padding="10px 40px">
           {/* <h1>Twoimage</h1>  */}
           {product.map((elem)=>{ return (
               <Box width="100%" padding="0px 1.5%" key={elem.id}>
                   <div>
                       <img src={elem.img} alt={elem.name}/>
                    </div>
                    <div>
                   <div className='category'>
                       <span className='feature'>{elem.category}</span>
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
export default Twoimage

