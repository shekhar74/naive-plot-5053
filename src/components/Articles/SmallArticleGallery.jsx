import React from "react";
import SmallArticle from "./SmallArticle";

const SmallArticleGallery = () => {
  const data = [
    {
      id: 1,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1647452231/e9fr0eotztm7xdu4cx9h.jpg",
      heading: "PERSONAL SPACE WITH JOSH ITIOLA",
      category: "Culture",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1645641013/hyp0uvd6mvfsvynwflwd.jpg",
      heading: "HOW TO BUILD A HOME GYM",
      category: "Culture",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1641839958/oks77kv3djnbjvfserxc.jpg",
      heading: "Cataloging A Dream House",
      category: "Fashion",
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1638385892/xlxo7ygruwzki2spmzxl.jpg",
      heading: "Cataloging A Dream House",
      category: "Culture",
    },
  ];
  return (
    <div>
      <hr style={{ border: "none", borderTop: "1px solid black"}}/>
      {data.map((d) => (
        
          <SmallArticle key={d.id} img={d.img} heading={d.heading} category={d.category} />
       
      ))}
    </div>
  );
};

export default SmallArticleGallery;