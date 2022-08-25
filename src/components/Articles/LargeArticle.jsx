import React from "react";

const LargeArticle = (props) => {
  return (
    <div style={{display:"flex", border:"1px solid white"}}>
      <div style={{flex:1}}>
        <img style={{width:"95%", height:"90%"}} src={props.img} alt="" />
      </div>
      <div style={{ flex: 1, padding:"0%" , textAlign:"left"}}>
              <p className="heading">{props.heading}</p>
              <h5 className="feature">{props.category}</h5 >
        <p style={{ fontSize:"inherit", marginTop:"7%",marginLeft:"0%"}} >{props.text}</p>
        
      </div>
    </div>
  );
};

export default LargeArticle;