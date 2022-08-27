import React from "react";
import Eightdiv from "./Eightdiv";



const EightdivGallery = () => {
  const data = [
    {
      id: 1,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1637861562/fmzf3kybk2ssokjiu7o7.jpg",
      heading:"Breakfast in Bed with Tekla",
      category: "Fashion",
      
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1628524878/weqae0dquzuozhnrgf6r.jpg",
      heading: "PRET-A-MANGER: SIX PASTA RECIPES FROM DESIGNERS & FRIENDS",
      category: "Culture",
    
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1615221742/pexmfaw8kz6vhqbzodmu.jpg",
      heading: "Vans Life: Matty Matheson’s Big Crunch",
      category: "Fashion",
      
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1614105942/skta4s2qsjo6xdfqjknr.jpg",
      heading: "KITCHEN PERSON",
      category: "Culture",
      
    },
  ];
  return (
    <div style={{display:"flex"}}>
    <div >
    <div style={{borderTop:"1px solid black", marginTop:"5px",width:"200px"}}></div>  
        <h1 id="fourthone" style={{height:"85px"}}>WHAT TO EAT</h1><br />
        <h3 className="feature" style={{paddingBottom:"8%"}}>VIEW ALL STORIES</h3>
        <div style={{borderTop:"1px solid black", marginTop:"-4px"}}> </div>
    </div>
    <div className="eightdivgallery">
      <hr />
      
      {data.map((d) => (
       < div className="Wrapper" key={d.id}>
          <div style={{borderTop:"1px solid black"}}> </div> 
          <Eightdiv  img={d.img} heading={d.heading} category={d.category} />
          <div style={{borderTop:"1px solid black"}}> </div> 
          </div>
      ))}
      
    </div>
    </div>
  );
};

export default EightdivGallery;