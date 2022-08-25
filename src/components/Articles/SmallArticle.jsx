import React from 'react'
// import { Label } from '../StyledComponents/Label';

const SmallArticle = (props) => {
  return (
    <>
      <div style={{ display: "flex", margin: "2%" ,textAlign:"left", paddingLeft:"2%"}}>
        <div style={{ flex: 1 ,height:"100px"}}>
          <img style={{ width: "100%" ,height:"99px"}} src={props.img} alt="" />
        </div>
        <div style={{ flex: 2 , paddingLeft:"2%" }}>
          <h6 >{props.heading}</h6>
          <h5 className='feature' >{props.category}</h5>
        </div>
      </div>
      <hr style={{ border: "none", borderBottom: "1px solid black"}}/>
    </>
  );
}

export default SmallArticle