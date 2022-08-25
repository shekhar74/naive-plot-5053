import React from "react";
import Fourthdiv from "./Fourthdiv";



const Fourthdivgallery = () => {
  const data = [
    {
      id: 1,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1653679510/nokh1fxeed1rjquv1yyb.jpg",
      heading:"SECOND SKIN WITH KATHRYN BOWEN",
      category: "Fashion",
      
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1648043578/rx9qrqkbfbni3ajifbqh.jpg",
      heading: "Danger By Definition: Lựu Đạn Is Hung La’s New Look",
      category: "Fashion",
    
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1649709520/yg0e4ouwzjw4vsqxtlf8.jpg",
      heading: "Freshly Squeezed!",
      category: "Fashion",
      
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1637003227/kboisnwdudwfrxvbcjj2.jpg",
      heading: "FINDING THE NEW FLEECE WITH ARNAR MÁR JÓNSSON",
      category: "Fashion",
      
    },
  ];
  return (
    <div style={{display:"flex"}}>
    <div >
    <div style={{borderTop:"1px solid black", marginTop:"5px"}}></div>  
        <h1 id="fourthone">DESIGNERS TO WATCH</h1><br />
        <h3 className="feature" style={{paddingBottom:"8%"}}>VIEW ALL STORIES</h3>
        <div style={{borderTop:"1px solid black", marginTop:"-4px"}}> </div>
    </div>
    <div className="eightdivgallery">
    <div style={{borderTop:"1px solid black"}}> </div>
      
      {data.map((d) => (
       < div className="Wrapper" key={d.id}>
          <div style={{borderTop:"1px solid black"}}> </div> 
          <Fourthdiv  img={d.img} heading={d.heading} category={d.category} />
          <div style={{borderTop:"1px solid black"}}> </div> 
          </div>
      ))}
      
    </div>
    </div>
  );
};

export default Fourthdivgallery;