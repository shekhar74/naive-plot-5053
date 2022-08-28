import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./MenDetails.css"
import {useCart} from "react-use-cart"
import Navbar from '../navbar/Navbar'

let everything_else=[
   
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222168M645002_1/maison-margiela-black-phone-pouch.jpg",
      brand:"MAISON MARGIELA",
      name:"Black Phone Pounch",
      price:"400",id:"200"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222168M645004_1/maison-margiela-black-neck-phone-pouch.jpg",
      brand:"MAISON MARGIELA",
      name:"Black Neck Phone pouch",
      price:"350",id:"201"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222168M645003_1/maison-margiela-beige-neck-phone-pouch.jpg",
      brand:"MAISON MARGIELA",
      name:"Beige Neck Phone Pouch",
      price:"350",id:"202"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221389M645020_1/maison-kitsune-brown-stamp-logo-strap-iphone-12-12-pro-case.jpg",
      brand:"MAISON MARGIELA",
      name:"Brown Stamp Logo",
      price:"85",id:"203"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221885M784000_1/reyal-layer-002-select-day-serum-30-ml.jpg",
      brand:"REYAL",
      name:"Layer 002 Select Day Serum",
      price:"45",id:"204"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221885M659000_1/reyal-layer-003-super-day-moisturizer-spf-20-100-ml.jpg",
      brand:"REYAL",
      name:"Layer 003 Super Day",
      price:"30",id:"205"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221885M659001_1/reyal-layer-003-super-night-moisturizer-100-ml.jpg",
      brand:"REYAL",
      name:"Layer 003",
      price:"30",id:"206"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221885M650000_1/reyal-supreme-body-wash-1-l.jpg",
      brand:"REYAL",
      name:"Supreme Body Wash",
      price:"45",id:"207"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221087M796000_1/baina-ssense-exclusive-green-and-off-white-checkered-towel.jpg",
      brand:"BAINA",
      name:"SSENSE Exclusive Green",
      price:"75",id:"208"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221087M796001_1/baina-ssense-exclusive-green-and-off-white-checkered-hand-towel.jpg",
      brand:"BAINA",
      name:"SSENSE Exclusive Green",
      price:"45",id:"209"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/212334M642000_1/denon-brown-ah-d9200-headphones.jpg",
      brand:"BAINA",
      name:"Brown AH",
      price:"1995",id:"210"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221948M618001_1/wacko-maria-red-maria-candle.jpg",
      brand:"BAINA",
      name:"Red Maria",
      price:"105",id:"211"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221711M620014_1/vitruvi-fresh-air-essential-oil-set.jpg",
      brand:"VITRUVI",
      name:"Fresh Air Essential Oil Set",
      price:"50",id:"212"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221711M620011_1/vitruvi-signature-scent-kit-4-x-5-ml.jpg",
      brand:"VITRUVI",
      name:"Signature Scent",
      price:"55",id:"213"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221711M620012_1/vitruvi-rest-scent-kit-4-x-5-ml.jpg",
      brand:"VITRUVI",
      name:"Rest Scent",
      price:"55",id:"214"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221711M620013_1/vitruvi-refresh-scent-kit-4-x-5-ml.jpg",
      brand:"VITRUVI",
      name:"Refresh Scent Kit",
      price:"55",id:"215"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221389M645018_1/maison-kitsune-black-anthony-burrill-edition-iphone-12-12-pro-case.jpg",
      brand:"MAISON KITSUNE",
      name:"Black Anthony Buril",
      price:"60",id:"216"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221389M645019_1/maison-kitsune-white-anthony-burrill-edition-iphone-12-12-pro-case.jpg",
      brand:"MAISON KITSUNE",
      name:"White Anthony",
      price:"60",id:"217"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221389M645022_1/maison-kitsune-green-camp-logo-strap-iphone-12-12-pro-case.jpg",
      brand:"MAISON KITSUNE",
      name:"Green Camp",
      price:"85",id:"218"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221389M645021_1/maison-kitsune-pink-stamp-logo-strap-iphone-12-12-pro-case.jpg",
      brand:"MAISON KITSUNE",
      name:"Pink Stamp",
      price:"85",id:"219"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221737M834017_1/mammut-black-trion-nordwand-15-alpine-backpack.jpg",
      brand:"MAMMUT",
      name:"Black Trion Nordwand ",
      price:"215",id:"220"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221737M834016_1/mammut-orange-trion-nordwand-alpine-28-backpack.jpg",
      brand:"MAMMUT",
      name:"Orange Trion",
      price:"220",id:"221"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221404M699004_1/versace-baby-black-and-gold-barocco-bottle-holder.jpg",
      brand:"MAMMUT",
      name:"Baby Black & Gold Barocco",
      price:"160",id:"222"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221404M699003_1/versace-baby-black-and-gold-barocco-portable-changing-mat.jpg",
      brand:"MAMMUT",
      name:"Baby Black & Gold",
      price:"335",id:"223"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221797M831004_1/project-full-pink-natural-canvas-meditation-cushion-set.jpg",
      brand:"PROJECT FULL",
      name:"Pink Natural",
      price:"400",id:"224"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221413M690004_1/tiny-cottons-baby-blue-and-tan-pima-cotton-bodysuit.jpg",
      brand:"PROJECT FULL",
      name:"Baby Blue ",
      price:"40",id:"225"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221101M000055_1/charles-jeffrey-loverboy-ssense-exclusive-baby-multicolor-printed-romper.jpg",
      brand:"PROJECT FULL",
      name:"SSENSE Exclusive",
      price:"80",id:"226"},
  
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221797M831001_1/project-full-off-white-natural-canvas-meditation-cushion-set.jpg",
      brand:"PROJECT FULL",
      name:"Off-White Natural",
      price:"375",id:"227"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221413M713001_1/tiny-cottons-kids-yellow-oleander-cap.jpg",
      brand:"VERSACE",
      name:"Kid Yellow",
      price:"40",id:"228"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221413M690004_1/tiny-cottons-baby-blue-and-tan-pima-cotton-bodysuit.jpg",
      brand:"VERSACE",
      name:"Baby Blue & Tan Pima Cotton Bodysuit",
      price:"40",id:"229"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221404M717000_1/versace-kids-pink-medusa-bag.jpg",
      brand:"VERSACE",
      name:"Kids Pink Medusa Bag",
      price:"535",id:"230"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221404M702013_1/versace-kids-white-barocco-goddess-dress.jpg",
      brand:"VERSACE",
      name:"Kid White Barocco",
      price:"270",id:"231"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221975M713006_1/maed-for-mini-kids-orange-luxurious-leopard-bucket-hat.jpg",
      brand:"MADE FOR MINI",
      name:"Kids Orange Luxurious",
      price:"50",id:"232"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221404M721010_1/versace-kids-blue-royal-rebellion-denim-shorts.jpg",
      brand:"MADE FOR MINI",
      name:"Kids Blue",
      price:"330",id:"233"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221413M703023_1/tiny-cottons-kids-beige-oranges-tank-top.jpg",
      brand:"MADE FOR MINI",
      name:"Kids Beige Orange",
      price:"70",id:"234"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221413M703003_1/tiny-cottons-kids-beige-and-blue-medium-stripes-t-shirt.jpg",
      brand:"MADE FOR MINI",
      name:"Kids beige",
      price:"35",id:"235"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222168M645003_1/maison-margiela-beige-neck-phone-pouch.jpg",
      brand:"MAISON MARGIELA",
      name:"Beige Neck Phone Pouch",
      price:"350",id:"236"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221389M645020_1/maison-kitsune-brown-stamp-logo-strap-iphone-12-12-pro-case.jpg",
      brand:"MAISON MARGIELA",
      name:"Brown Stamp Logo",
      price:"85",id:"237"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221885M784000_1/reyal-layer-002-select-day-serum-30-ml.jpg",
      brand:"REYAL",
      name:"Layer 002 Select Day Serum",
      price:"45",id:"238"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221885M659000_1/reyal-layer-003-super-day-moisturizer-spf-20-100-ml.jpg",
      brand:"REYAL",
      name:"Layer 003 Super Day",
      price:"30",id:"239"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221711M620012_1/vitruvi-rest-scent-kit-4-x-5-ml.jpg",
      brand:"VITRUVI",
      name:"Rest Scent",
      price:"55",id:"240"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221711M620013_1/vitruvi-refresh-scent-kit-4-x-5-ml.jpg",
      brand:"VITRUVI",
      name:"Refresh Scent Kit",
      price:"55",id:"241"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221389M645018_1/maison-kitsune-black-anthony-burrill-edition-iphone-12-12-pro-case.jpg",
      brand:"MAISON KITSUNE",
      name:"Black Anthony Buril",
      price:"60",id:"242"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221389M645019_1/maison-kitsune-white-anthony-burrill-edition-iphone-12-12-pro-case.jpg",
      brand:"MAISON KITSUNE",
      name:"White Anthony",
      price:"60",id:"243"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221404M717000_1/versace-kids-pink-medusa-bag.jpg",
      brand:"VERSACE",
      name:"Kids Pink Medusa Bag",
      price:"535",id:"244"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221404M702013_1/versace-kids-white-barocco-goddess-dress.jpg",
      brand:"VERSACE",
      name:"Kid White Barocco",
      price:"270",id:"245"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221975M713006_1/maed-for-mini-kids-orange-luxurious-leopard-bucket-hat.jpg",
      brand:"MADE FOR MINI",
      name:"Kids Orange Luxurious",
      price:"50",id:"246"},
  {
      img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221404M721010_1/versace-kids-blue-royal-rebellion-denim-shorts.jpg",
      brand:"MADE FOR MINI",
      name:"Kids Blue",
      price:"330",id:"247"},
]



export const EveryDetails = () => {
  const { id } = useParams() ;
  const { addItem, items } = useCart();
  const [ product , setProduct] = useState({})
  
// console.log(addItem)


  let handleAdd = (product)=>{
    addItem(product,1);
    alert("item added to checkout");
    window.location.href="/checkout"; 

  }
   localStorage.setItem("Items",JSON.stringify(items))
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    
  
    const detailData = everything_else.filter((e) => {
      return e.id === id
    })
    const maindata=detailData[0]
     console.log("mainData",maindata)
    setProduct(maindata)

  }
 
  return (
    <div>
      
      <Navbar/>
    <div className='Main-div'>
     
                 <div className="mens-category1">
               
                        <h5>{product.name}</h5>
                    
                    {/* <div className="mens-category-list"> */}
                        <p>{product.brand}</p>
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
                        <img className='img' img src={product.img} alt="mens" />
                  </div> 
                  <div className="mens-category1">
               
                        <h5>{product.price} USD</h5>
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
                          <button className="add-to-cart" onClick={()=>{handleAdd(product)}}>Add to Bag</button>
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
