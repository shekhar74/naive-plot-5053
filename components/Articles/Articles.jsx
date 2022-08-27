import React from 'react'
import "./Articles.css"
import LagreArticleGallery from './LagreArticleGallery';
import SmallArticleGallery from './SmallArticleGallery';
// import { Label } from "../StyledComponents/Label";

const Articles = () => {
  return (
    <div>
      <div className="dense-container">
        <div className="large-articles">
          <LagreArticleGallery/>
        </div>
        <div className="medium-articles">
          <div>
            <img
              style={{ height: "100%", width:"90%", padding:"0 5px",margin:"0 10px"  }}
              src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1659556897/nowo9sqwh3m9moo9fco9.jpg"
              alt="error"
            />
          </div>
          <div>
            <h3 className='name' style={{ padding:"0 5px",margin:"0px 10px", fontSize:"19px" }}>
            HOW CONNOR MCKNIGHT LEARNED TO MAKE PANTS
            </h3>
          </div>
          <h5 className='feature' style={{ padding:"0 5px",margin:"0 10px"  }}> FASHION | APR 6</h5>
        </div>
        <div className="small-articles">
         <SmallArticleGallery/>
        </div>
      </div>
    </div>
  );
}

export default Articles