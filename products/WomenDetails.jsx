import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {useCart} from "react-use-cart"
import "./MenDetails.css"
import Navbar from "../navbar/Navbar"

let womenProduct=[
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221432F111000_1/1xblue-ssense-exclusive-pink-anime-camisole.jpg",brand:"1XBLUE",name:"SSENSE Exclusive",price:"113"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221188F049063_1/mm6-maison-margiela-ssense-exclusive-black-nano-faux-leather-triangle-tote.jpg",brand:"MM6 MAISON MARGIELA",name:"SSENSE Exclusive",price:"185"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221188F049064_1/mm6-maison-margiela-ssense-exclusive-white-nano-faux-leather-triangle-tote.jpg",brand:"MM6 MAISON MARGIELA",name:"SSENSE Exclusive",price:"185"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221188F049065_1/mm6-maison-margiela-ssense-exclusive-red-triangle-nano-tote.jpg",brand:"MM6 MAISON MARGIELA",name:"SSENSE Exclusive",price:"185"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221188F049067_1/mm6-maison-margiela-ssense-exclusive-red-medium-faux-leather-triangle-tote.jpg",brand:"MM6 MAISON MARGIELA",name:"SSENSE Exclusive",price:"250"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221188F049068_1/mm6-maison-margiela-ssense-exclusive-black-xxl-triangle-tote.jpg",brand:"MM6 MAISON MARGIELA",name:"SSENSE Exclusive",price:"385"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221188F049069_1/mm6-maison-margiela-ssense-exclusive-white-xxl-triangle-tote.jpg",brand:"MM6 MAISON MARGIELA",name:"SSENSE Exclusive",price:"385"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F125035_1/manolo-blahnik-blue-araspemu-heeled-sandals.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"800"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F125003_1/manolo-blahnik-black-scolto-heeled-sandals.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"700"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F122024_1/manolo-blahnik-black-trina-heels.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"1155"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F122004_1/manolo-blahnik-pink-satin-hangisi-heels.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"945"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F125002_1/manolo-blahnik-beige-scolto-heeled-sandals.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"710"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F125034_1/manolo-blahnik-black-araspemu-heeled-sandals.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"800"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F118000_1/manolo-blahnik-black-satin-hangisi-ballerina-flats.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"1020"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F122029_1/manolo-blahnik-brown-maysale-pumps.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"700"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F125037_1/manolo-blahnik-black-caracol-heeled-sandals.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"820"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F125006_1/manolo-blahnik-brown-susa-heeled-sandals.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"880"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F124000_1/manolo-blahnik-black-susa-sandals.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"795"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F122005_1/manolo-blahnik-grey-satin-hangisi-heels.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"780"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F122009_1/manolo-blahnik-black-hangisimu-50-heeled-sandals.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"1020"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F118002_1/manolo-blahnik-white-hangisi-ballerina-flats.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"945"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F122002_1/manolo-blahnik-yellow-satin-hangisi-heels.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"905"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F052000_1/givenchy-white-cotton-mini-dress.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"945"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F054001_1/givenchy-black-viscose-midi-dress.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"685"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F054002_1/givenchy-pink-viscose-midi-dress.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"1775"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F054003_1/givenchy-black-viscose-midi-dress.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"1775"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F358001_1/givenchy-pink-nylon-bodysuit.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"1220"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F358000_1/givenchy-black-4g-bodysuit.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"435"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F096003_1/givenchy-pink-viscose-sweater.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"440"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F098000_1/givenchy-black-cotton-sweatshirt.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"790"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F110006_1/givenchy-white-cotton-t-shirt.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"660"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F099001_1/givenchy-black-viscose-turtleneck.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"505"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F099002_1/givenchy-beige-viscose-turtleneck.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"505"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221249F063018_1/jil-sander-green-cotton-blazer.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"770"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221168F054007_1/maison-margiela-blue-cotton-shirt.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"770"},
]



export const WomenDetails = () => {
  const { id } = useParams() ;
  const [ women , setWomen] = useState({})
  const { addItem, items } = useCart();

  let handleAdd = (women)=>{
    addItem(women,1);

  }
  // console.log("getItems",items);
   localStorage.setItem("Items",JSON.stringify(items))
  const getData = async () => {
    
    const detailData = womenProduct.filter((e) => {
      return e.id === id
    })
    console.log(detailData[0])
    setWomen(detailData[0])

  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <Navbar/>
    <div className='Main-div'>
     
                 <div className="mens-category1">
               
                        <h5>{women.product}</h5>
                    
                    {/* <div className="mens-category-list"> */}
                        <p>{women.pro_desc}</p>
                        <h6>Padded polyester satin jacket</h6>
                        <p>. Half-Zip closure at stand collar</p>
                        <p>. Welt pockets</p>
                        <p>. Concealed zip vent at side-seam</p>
                        <p>. Rubberizes logo patch at back collar</p>
                        <p>. Single press-stud tab at back hem</p>
                        <p>. Elasticized cuffs and hem</p>
                        <p>. Fully lined</p>
                        <br />
                        <p> Please note that this item may not be shipped within the EU.</p>
                        <br />
                        <p> Supplier Color: OaK</p>
                        <br />
                        <p>Body: 100% polyester. Fill: 100%  polyester. Lining: 100% polyester.</p>
                        <br />
                        <p>221161M180032</p>
                   
                  </div> 
                  <div className="mens-details-img">
                        <img className='img' img src={women.img_url} alt="mens" />
                  </div> 
                  <div className="mens-category1">
               
                        <h5>{women.price} USD</h5>
                        <select name="" id="size">
                          <option value="">Select Size</option>
                          <option value="XXS">XXS</option>
                          <option value="XS">SX</option>
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                          <option value="XL">XL</option>
                          <option value="XXL">XXL</option>
                        </select>
                        <div className='Add-to-cart-div'>
                          <button className="add-to-cart" onClick={()=>{handleAdd(women)}}>Add to Bag</button>
                          <button className="add-to-wish">Add to Wishlist</button>
                        </div>
                        <div className='Add-to-cart-div2'>
                          <p className='p1'>Fit Predictor</p>
                          <p className='p2'> Calculate your size</p>
                        </div>
                        <p className='p3'>Model is 6ft 1" and wear size L. SIZE GUIDE</p>
                        <p className='p4'>India : Free shipping on orders over $500 USD</p>
                       
                       
                    
                   
                  </div> 
      
    </div>
    </div>
    
  )
}


 
