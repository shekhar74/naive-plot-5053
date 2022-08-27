import React from 'react'

const Eightdiv = (props) => {
  return (
    <>
      <div style={{ display: "flex", margin: "3.5%" }}>
    
        <div style={{ flex: 1 ,height:"110px"}}>
          <img style={{ width: "100%", height:"100%" }} src={props.img} alt="" />
        </div>
        <div style={{ flex: 2 ,padding:"0% 5%", textAlign:"left"}}>
          <h6 className="tile" style={{height:"90px"}}>{props.heading}</h6>
          <h3 style={{ marginTop: "10px" }} >{props.category}</h3>
        </div>
      </div>
    </>
  );
}

export default Eightdiv
