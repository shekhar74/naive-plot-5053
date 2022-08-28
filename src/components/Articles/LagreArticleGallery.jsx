import React from "react";
import LargeArticle from "./LargeArticle";

const LagreArticleGallery = () => {
  const data = [
    {
      id: 1,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1660076947/ahegciix42astxmgkcit.jpg",
      heading: "MUNA WILL MAKE IT OKAY",
      category: "Music",
      text: "On soft sounds, songs for getting over breakups, and the ideal scenario for listening to their latest self-titled album, the band opens ...",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1659979197/zdmfwzvkf5c64savfs16.jpg",
      heading: "SEE RIGHT THROUGH YOU",
      category: "Market",
      text: "Transparent tokens from FW22 with Bode, Gucci, and Mugler.",
    },
  ];
  return (
    <div>
      <div className="large-articles1">
        {data.map((d) => (
          <LargeArticle key={d.id}
            img={d.img}
            heading={d.heading}
            category={d.category}
            text={d.text}
          />
        ))}
      </div>
    </div>
  );
};

export default LagreArticleGallery;