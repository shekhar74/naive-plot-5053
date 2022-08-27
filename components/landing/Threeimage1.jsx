import React from 'react'
import "./component.css"
import {Box, Flex } from '@chakra-ui/react'

const product = [{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1659021063/adkzwg6vpzherq6bv2kr.jpg",
    category:"RECENT",
    name:"AMI MEANS FRIEND: LUCKY DAYE IS ONE OF R&B’S MOST POPULAR COLLABORATORS",
    description:"Fashion | Aug 5",
    id:3
},
{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1659107716/grmkrgxgntugbtjzxbpt.jpg",
    category:"RECENT",
    name:"Knittin’ on Top of the World",
    description:"Art | Aug 3", 
    id:4
},
{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1659122150/hxsh6jjqhy7eqtngrkrb.jpg",
    category:"RECENT",
    name:"HOW MYHA’LA HERROLD SUCCEEDS IN SHOWBIZ",
    description:"Culture | Aug 1",
    id:5 
}]


const Threeimage1 = (props) => {
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
export default Threeimage1