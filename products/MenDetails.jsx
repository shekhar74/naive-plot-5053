import React from 'react'
import { useState, useEffect } from 'react'
 import { useParams } from 'react-router-dom'
import {useCart} from "react-use-cart"
import "./MenDetails.css"
import Navbar from '../navbar/Navbar'

let menProduct=[
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221623M195000_1/johnlawrencesullivan-black-wool-2button-blazer.jpg",brand:"KSUBI",name:"Black Devil Denim Jacket",price:"265",id:"1"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222088M180001_1/ksubi-black-devil-denim-jacket.jpg",brand:"KSUBI",name:"Black Paste Up shirt",price:"160",id:"2"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222088M192000_1/ksubi-black-paste-up-shirt.jpg",brand:"KSUBI",name:"Black Cotton Hoodie",price:"180",id:"3"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222088M202000_1/ksubi-black-cotton-hoodie.jpg",brand:"KSUBI",name:"Black Cotton Long Sleeve T-Shirt",price:"85",id:"4"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222088M213004_1/ksubi-black-cotton-long-sleeve-t-shirt.jpg",brand:"KSUBI",name:"Black Cotton T-Shirt",price:"60",id:"5"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222088M213039_1/ksubi-black-cotton-t-shirt.jpg",brand:"KSUBI",name:"Black Chitch Devil Jeans",price:"195",id:"6"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222088M186001_1/ksubi-black-chitch-devil-jeans.jpg",brand:"KSUBI",name:"Black Van Winkle Devil Jeans",price:"250",id:"7"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222088M186002_1/ksubi-black-van-winkle-devil-jeans.jpg",brand:"KSUBI",name:"Black Van Winkle Devil Dynamite Jeans",price:"235",id:"8"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222088M186055_1/ksubi-black-van-winkle-dynamite-jeans.jpg",brand:"44 LABEL GROUP",name:"Black Van Winkle Rebel Jeans",price:"170",id:"9"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222088M186066_1/ksubi-black-van-winkle-rebel-jeans.jpg",brand:"BETHANY WILLIAMS",name:"Black Cotton T-Shirt",price:"185",id:"10"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222248M213000_1/44-label-group-black-cotton-t-shirt.jpg",brand:"NUDIE JEANS",name:"Black The Maggie Project & Making for Change Edition Hoodie",price:"440",id:"11"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221562M202031_1/bethany-williams-black-the-magpie-project-and-making-for-change-edition-hoodie.jpg",brand:"BETHANY WILLIAMS",name:"Black Slim Adam Trousers",price:"$65",id:"12"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222078M186041_1/nudie-jeans-black-slim-adam-trousers.jpg",brand:"SOAR RUNNING",name:"Black Dual-Fabric 3.0 Leggings",price:"170",id:"13"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222627M190000_1/soar-running-black-dual-fabric-30-leggings.jpg",brand:"STELLA MCCARTNEY",name:"Reversible Black & White Cotton Bucket Hat",price:"290",id:"14"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221471M140000_1/stella-mccartney-reversible-black-and-white-cotton-bucket-hat.jpg",brand:"VISVIM",name:"Brown Cotton T-Shirt",price:"200",id:"15"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221487M213003_1/visvim-brown-cotton-t-shirt.jpg",brand:"VISVIM",name:"Navy Cotton Shorts",price:"640",id:"16"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221487M193002_1/visvim-navy-cotton-shorts.jpg",brand:"WON HUNDRED",name:"Black Vinny Denim Jacket",price:"250",id:"17"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222636M177000_1/won-hundred-black-vinny-denim-jacket.jpg",brand:"WON HUNDRED",name:"Black Vinny Jacket",price:"560",id:"18"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222636M181000_1/won-hundred-black-vinny-jacket.jpg",brand:"WON HUNDRED",name:"Black Eddie Polo",price:"175",id:"19"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222636M212000_1/won-hundred-black-eddie-polo.jpg",brand:"WON HUNDRED",name:"Black Troy T-Shirt",price:"70",id:"20"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222636M213003_1/won-hundred-black-troy-t-shirt.jpg",brand:"LEVI'S",name:"Black Cotton Shorts",price:"60",id:"21"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221099M193005_1/levis-black-cotton-shorts.jpg",brand:"VALENTINO GARAVANI",name:"Black VLTN Messenger Bag",price:"1670",id:"22"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222807M170010_1/valentino-garavani-black-vltn-messenger-bag.jpg",brand:"VALENTINO GARAVANI",name:"Black Leather Messenger Bag",price:"795",id:"23"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222807M170004_1/valentino-garavani-black-leather-messenger-bag.jpg",brand:"MAISON KITSUNE",name:"Black Leather",price:"60",id:"24"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221389M172001_1/maison-kitsune-black-palais-royal-tote.jpg",brand:"MAISON KITSUNE",name:"Black Leather",price:"60",id:"25"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221389M172006_1/maison-kitsune-black-fox-head-tote.jpg",brand:"MAISON KITSUNE",name:"Black Leather",price:"45",id:"26"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221389M172015_1/maison-kitsune-black-cafe-tote.jpg",brand:"VYNER ARTICLES",name:"Black Cafe Tote",price:"445",id:"27"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221286M166000_1/vyner-articles-multicolor-bandana-patchwork-backpack.jpg",brand:"C.P. COMPANY",name:"Black Logo Backpack",price:"200",id:"28"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221357M166003_1/cp-company-black-logo-backpack.jpg",brand:"LANVIN",name:"Black Classic Clogs",price:"1150",id:"29"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221254M169000_1/lanvin-black-curb-duffle-bag.jpg",brand:"BOTTEGA VANETA",name:"Black Classic Clogs",price:"1385",id:"30"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222798M223015_1/bottega-veneta-black-tire-chelsea-boots.jpg",brand:"BOTTEGA VANETA",name:"Black Classic Clogs",price:"405",id:"31"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222798M234016_1/bottega-veneta-black-slider-sandals.jpg",brand:"JIL SANDER",name:"Black Classic Clogs",price:"680",id:"32"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221249M234006_1/jil-sander-grey-nabuk-sandals.jpg",brand:"BOTTEGA VANETA",name:"Black Classic Clogs",price:"710",id:"33"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222807M237000_1/valentino-garavani-black-rockrunner-low-top-sneakers.jpg",brand:"VALENTINO GARAVANI",name:"Black Classic Clogs",price:"630",id:"34"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222807M237003_1/valentino-garavani-khaki-and-black-rockrunner-low-top-sneakers.jpg",brand:"",name:"Black Classic Clogs",price:"630",id:"35"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222807M237004_1/valentino-garavani-black-rockrunner-sneakers.jpg",brand:"VALENTINO GARAVANI",name:"Black Classic Clogs",price:"700",id:"36"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222807M237011_1/valentino-garavani-khaki-and-navy-rockrunner-sneakers.jpg",brand:"VALENTINO GARAVANI",name:"Black Classic Clogs",price:"790",id:"37"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222807M237045_1/valentino-garavani-black-vl7n-low-top-sneakers.jpg",brand:"VALENTINO GARAVANI",name:"Black Classic Clogs",price:"790",id:"38"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222807M237056_1/valentino-garavani-black-and-gold-one-stud-low-top-sneakers.jpg",brand:"VALENTINO GARAVANI",name:"Black Classic Clogs",price:"360",id:"39"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222439M145001_1/numbering-silver-8551-necklace.jpg",brand:"NUMBERING",name:"Silver #8551 Necklace",price:"120",id:"40"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222439M145005_1/numbering-ssense-exclusive-silver-5702-necklace.jpg",brand:"NUMBERING",name:"SSENSE Exclusive Silver #5702 Necklace",price:"225",id:"41"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222439M145006_1/numbering-ssense-exclusive-gold-5702-necklace.jpg",brand:"NUMBERING",name:"SSENSE Exclusive Gold #5702 Necklace",price:"225",id:"42"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222798M213000_1/bottega-veneta-green-cotton-t-shirt.jpg",brand:"GIVENCHY",name:"Black Polyester Blazer",price:"1920",id:"43"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222476M202000_1/valentino-navy-cotton-hoodie.jpg",brand:"LEMAIRE",name:"Brown Cotton Jacket",price:"900",id:"44"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222476M213002_1/valentino-black-cotton-t-shirt.jpg",brand:"ACNE STUDIOS",name:"Blue Cotton Sweatshirt",price:"240",id:"45"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222476M193007_1/valentino-black-wool-shorts.jpg",brand:"THOM BROWNE",name:"Navy Wool Skirt",price:"2165",id:"46"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222476M193009_1/valentino-brown-wool-shorts.jpg",brand:"BOTTEGA VENETA",name:"Green Cotton T-Shirt",price:"485",id:"47"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222476M213002_1/valentino-black-cotton-t-shirt.jpg",brand:"VALENTINO",name:"Black Cotton T-Shirt",price:"785",id:"48"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222476M193007_1/valentino-black-wool-shorts.jpg",brand:"VALENTINO",name:"Black Wool Shorts",price:"735",id:"49"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221404M190020_1/versace-purple-la-greca-lounge-pants.jpg",brand:"VALENTINO",name:"Brown Wool Shorts",price:"735",id:"50"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221001M192037_1/diesel-blue-westy-shirt.jpg",brand:"VERSACE",name:"Purple La Greca Lounge Pants",price:"990",id:"51"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221001M202044_1/diesel-blue-cotton-hoodie.jpg",brand:"DIESEL",name:"Blue Westy Shirt",price:"295",id:"52"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221001M213002_1/diesel-black-t-diegor-t-shirt.jpg",brand:"DIESEL",name:"Blue Cotton Hoodie",price:"500",id:"53"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221482M192057_1/ami-alexandre-mattiussi-black-organic-cotton-shirt.jpg",brand:"DIESEL",name:"Black T-Diegor T-Shirt",price:"65",id:"54"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221482M192057_1/ami-alexandre-mattiussi-black-organic-cotton-shirt.jpg",brand:"AMI ALEXANDRE MATTIUSSI",name:"Black Organic Cotton Shirt",price:"265",id:"55"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222001M192000_1/diesel-beige-s-umbe-ssl-hs-shirt.jpg",brand:"DIESEL",name:"Beige S-UMBE-SSL-HS Shirt",price:"200",id:"56"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221001M186027_1/diesel-blue-d-mand-jeans.jpg",brand:"DIESEL",name:"Blue D-Mand Jeans",price:"460",id:"57"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221001M186030_1/diesel-blue-logo-jeans.jpg",brand:"DIESEL",name:"Blue Logo Jeans",price:"450",id:"58"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222001M186002_1/diesel-blue-d-strukt-jeans.jpg",brand:"DIESEL",name:"Blue D-Strukt Jeans",price:"220",id:"59"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222001M186004_1/diesel-black-sleenker-jeans.jpg",brand:"DIESEL",name:"Black Sleenker Jeans",price:"315",id:"60"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221482M186010_1/ami-alexandre-mattiussi-blue-alex-fit-jeans.jpg",brand:"AMI ALEXANDRE MATTIUSSI",name:"Blue Alex Fit Jeans",price:"295",id:"61"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221001M193030_1/diesel-brown-cotton-shorts.jpg",brand:"DIESEL",name:"Brown Cotton Shorts",price:"275",id:"62"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222001M186005_1/diesel-blue-cotton-slim-shorts.jpg",brand:"DIESEL",name:"Blue Cotton Slim Shorts",price:"220",id:"63"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278M180000_1/givenchy-black-polyester-blazer.jpg", brand:"GIVENCHY", name:"Black Polyester Blazer", price:"1920",id:"64"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221001M213002_1/diesel-black-t-diegor-t-shirt.jpg",brand:"DIESEL",name:"Black T=Diegor T-Shirt",price:"65",id:"65"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221482M192057_1/ami-alexandre-mattiussi-black-organic-cotton-shirt.jpg",brand:"AMI ALEXANDRE MATTIUSSI",name:"Black Organic Cotton shirt",price:"265",id:"66"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222001M186004_1/diesel-black-sleenker-jeans.jpg",brand:"DIESEL",name:"Black Sleenker Jeans",price:"315",id:"67"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222841M213021_1/dime-black-cotton-t-shirt.jpg",brand:"DIME",name:"Black Cotton T-Shirt",price:"50",id:"68"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221378M140001_1/ann-demeulemeester-black-sofieke-hat.jpg",brand:"ANN DEMEULEMEESTER",name:"Black Sofieke Hat",price:"610",id:"69"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221967M185000_1/heron-preston-black-polyester-vest.jpg",brand:"HERON PRESTON",name:"Black Polyester Vest",price:"600",id:"70"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221967M202001_1/heron-preston-black-cotton-hoodie.jpg",brand:"HERON PRESTON",name:"Black Cotton Hoodie",price:"395",id:"71"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221967M202012_1/heron-preston-black-strass-hoodie.jpg",brand:"HERON PRESTON",name:"Black Strass Hoodie",price:"435",id:"72"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221967M213015_1/heron-preston-black-cotton-t-shirt.jpg",brand:"Y-3",name:"Black Cotton T-Shirt",price:"215",id:"73"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221138M202010_1/y-3-black-cotton-hoodie.jpg",brand:"Y-3",name:"Black Cotton Hoodie",price:"180",id:"74"},
  {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221138M204010_1/y-3-black-cotton-sweatshirt.jpg",brand:"Y-3",name:"Black Cotton Sweatshirt",price:"160",id:"75"}
  
  
 
]




export const MenDetails = () => {
   const { id } = useParams()
  const [mens, setMens] = useState({})
  const { addItem, items } = useCart();
  console.log(id)

  let handleAdd = (mens)=>{
    addItem(mens,1);
    alert("item added to checkout");
    window.location.href="/checkout"; 
  }
  console.log("getItems",items);
   localStorage.setItem("Items",JSON.stringify(items))
  const getData = async () => {
    
  
    const detailData = menProduct.filter((e) => {
      return e.id === id
    })
    console.log(detailData[0])
    setMens(detailData[0])
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <Navbar/>
    <div className='Main-div'>
     
                 <div className="mens-category1">
               
                        <h5>{mens.name}</h5>
                    
                    {/* <div className="mens-category-list"> */}
                        <p>{mens.brand}</p>
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
                        <img className='img' img src={mens.img} alt="mens" />
                  </div> 
                  <div className="mens-category1">
               
                        <h5>{mens.price} USD</h5>
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
                          <button className="add-to-cart" onClick={()=>{handleAdd(mens)}}>Add to Bag</button>
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


 
