import React from 'react'
import "./Menswear.css"
import  {Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer'

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




export const Everything = () => {
  
    const [data,setData] = useState([])
    
    useEffect (()=>{
       
            setData(everything_else)
    },[])

    
  

    
    const handleSort = (e) => {       
        
        let data2 = data.sort((a, b) => {
        
        if (e === 'lowest')
         { return a.price - b.price;
            } else if (e === 'highest') {
                return b.price - a.price;
      }
        })
       setData([...data2])
      
    }

   

  return (
    <div>
        <Navbar />
        <div className="menswear-container">

            <div className="mens-category">
                <div>
                    <div className="mens-category-title">
                        <h5 className='boldtitle'>ALL CATEGORIES </h5>
                    </div>
                    <div className="mens-category-list">
                        <ul> ACCESSORIES</ul>
                        <ul> BAGS </ul>
                        <ul> CLOTHING </ul>
                        <ul> SHOES </ul>
                        </div>
                </div>
                <div>
                    <div className="mens-category-title">
                        <h5 className='boldtitle'>ALL DESIGNERS </h5>
                    </div>
                    <div className="mens-category-list">
                        <ul> 032c</ul>
                        <ul> 1017 ALYX 9SM </ul>
                        <ul> 11 by Boris Bidjan Saberi</ul>
                        <ul> 132 5. ISSEY MIYAKE </ul>
                        <ul> 3.1 Phillip Lim</ul>
                        <ul> 3MAN</ul>
                        <ul> 424</ul>
                        <ul> 44 Lable Group</ul>
                        <ul> 4SDESIGNS</ul>
                        <ul> 99% IS</ul>
                        <ul> A PERSONAL NOTE 73</ul>
                        <ul> A-COLD-WALL* </ul>
                        <ul> A.A. Spectrum</ul>
                        <ul> A.P.C.</ul>
                        <ul> AAPE by ABathing Ape</ul>
                        <ul> Acen Studios</ul>
                        <ul> ACRONYM</ul>
                        <ul> ADER error</ul>
                        <ul> adidas Originals</ul>
                        <ul> adidas x Humanrace by Pharrell</ul>
                        <ul> Williams </ul>
                        <ul> adidas x IVY PARK </ul>
                        <ul> Adieu</ul>
                        <ul> ADISH</ul>
                        <ul> Advisory Board Crystals</ul>
                        <ul> ADYAR</ul>
                        <ul> AFFXWRKA</ul>
                        <ul> Afield Out</ul>
                        <ul> Agnona</ul>
                        <ul> AGR</ul>
                        <ul> Ahluwalia</ul>
                        <ul> Ahluwalia & PaulSmith</ul>
                        <ul> Balenciaga</ul>
                        <ul> Balmain</ul>
                        <ul> Bao Bao Lssey Miyake</ul>
                        <ul> BAPE</ul>
                        <ul> Barbour</ul>
                        <ul> Bless</ul>
                        <ul> Bloke</ul>
                        <ul> Cartier</ul>
                        <ul> CAYL</ul>
                        <ul> CDLP</ul>
                        <ul> CFCL</ul>
                        <ul> Chen Peng</ul>
                        <ul> Chet Lo</ul>
                        <ul> Chimi</ul>
                        <ul> Chin Teo</ul>
                        <ul> Christian Louboutin</ul>
                        <ul> Clarks Originals</ul>
                        <ul> Diesel</ul>
                        <ul> Dime</ul>
                        <ul> Dita</ul>
                        <ul> Dion Lee</ul>
                        <ul> Doublet</ul>
                        <ul> Dr. Martens</ul>
                        <ul> Drake's</ul>
                        <ul> Drole DE Monsieur</ul>
                        <ul> Endless Joy </ul>
                        <ul> Erdem</ul>
                        <ul> ERL</ul>
                        <ul> Etro</ul>
                        <ul> Evisu</ul>
                        <ul> Etudes</ul>
                        <ul> Factor's</ul>
                        <ul> F-LAGSTUF-F</ul>
                        <ul> F.A.S.T.</ul>
                        <ul> F.A.S.T. by F.A.S.T.</ul>
                        <ul> Gimaguas</ul>
                        <ul> Givenchy</ul>
                        <ul> Golden Goose</ul>
                        <ul> GR10K</ul>
                        <ul> Grey Ant</ul>
                        <ul> Gucci</ul>
                        <ul> Guidi</ul>
                        <ul> Han Kjobenhavn</ul>
                        <ul> Hannah Jewett</ul>
                        <ul> HANREJ</ul>
                        <ul> HARAGOA</ul>
                        <ul> Harmony</ul>
                        <ul> Hatton Labs</ul>
                        <ul> Hed Mayner</ul>
                        <ul> Helmut Lang</ul>
                        <ul> Herno</ul>
                        <ul> Juun.J</ul>
                        <ul> JW Anderson</ul>
                        <ul> Junya Watanabe</ul>
                        <ul> Kanghyuk</ul>
                        <ul> Kenzo</ul>
                        <ul> KIDILL</ul>
                        <ul> Kids Worldswide</ul>
                        <ul> KidSuper</ul>
                        <ul> Kiko Kostadinov</ul>
                        <ul> King & Tuckfield</ul>
                        <ul> Lable Under Construction</ul>
                        <ul> Laburm</ul>
                        <ul> Lacoste</ul>
                        <ul> Lanvin</ul>
                        <ul> Le Gramme</ul>
                        <ul> Levi's</ul>
                        <ul> Li-Ning</ul>
                        <ul> Lillie</ul>
                        <ul> Lillie & Co</ul>
                        <ul> Liberal Youth Ministry</ul>
                        <ul> ZENGA</ul>
                        






                        </div>
                </div>
                
                

            </div>

            <div className='mens-data'>

               
                    {data.map((e)=>
                        {return (
                        <Link key={e.id} className="mens-data-item" to = {`${e.id}`}>
                            <img src={e.img} className="menimage" alt="missing"/>
                            <p className='leftinfo'>{e.brand}</p>
                            <p className='leftinfo'>{e.name}</p>
                            <p className='leftinfo'>$ {e.price}</p>
                            </Link>
                            )}
                    )}
                

            </div>
            <div className='mens-sort'>
                <div>
                    <div className="mens-category-title">
                            <h5 className='boldtitle'>SORT </h5>
                    </div>
                    <div className="mens-category-list">
                            <ul> Latest arrivals</ul>
                            <ul> Trending</ul>
                            <ul onClick={()=>handleSort("lowest")} value="lowest"> Price: Low to high</ul>
                            <ul onClick={()=>handleSort("highest")} value="highest"> Price: High to low </ul>
                    </div>
                    <div className="mens-category-title">
                            <h5 className='boldtitle'>COLORS</h5>
                    </div>
                    <div className="mens-category-list">
                            <ul className='uderline'> ALL COLORS </ul>
                            <ul> Black</ul>
                            <ul> Blue</ul>
                            <ul> Brown</ul>
                            <ul> Burgundy </ul>
                            <ul> Gray</ul>
                            <ul> Green</ul>
                            <ul> Navy </ul>
                            <ul> Pink </ul>
                            <ul> Purple</ul>
                            <ul> Red </ul>
                            <ul> Tan</ul>
                            <ul> White</ul>
                            <ul> Yellow</ul>

                            
                    </div>
                </div>
                
            </div>

        </div>


        <Footer />    
        
    </div>
  )
}
