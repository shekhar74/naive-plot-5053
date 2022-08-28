import React from 'react'
import "./Menswear.css"
// import "../App.css"

import  {Link } from 'react-router-dom'
//import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer'

let womenProduct=[
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221432F111000_1/1xblue-ssense-exclusive-pink-anime-camisole.jpg",brand:"1XBLUE",name:"SSENSE Exclusive",price:"113",id:"100"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221188F049063_1/mm6-maison-margiela-ssense-exclusive-black-nano-faux-leather-triangle-tote.jpg",brand:"MM6 MAISON MARGIELA",name:"SSENSE Exclusive",price:"185",id:"101"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221188F049064_1/mm6-maison-margiela-ssense-exclusive-white-nano-faux-leather-triangle-tote.jpg",brand:"MM6 MAISON MARGIELA",name:"SSENSE Exclusive",price:"185",id:"102"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221188F049065_1/mm6-maison-margiela-ssense-exclusive-red-triangle-nano-tote.jpg",brand:"MM6 MAISON MARGIELA",name:"SSENSE Exclusive",price:"185",id:"103"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221188F049067_1/mm6-maison-margiela-ssense-exclusive-red-medium-faux-leather-triangle-tote.jpg",brand:"MM6 MAISON MARGIELA",name:"SSENSE Exclusive",price:"250",id:"104"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221188F049068_1/mm6-maison-margiela-ssense-exclusive-black-xxl-triangle-tote.jpg",brand:"MM6 MAISON MARGIELA",name:"SSENSE Exclusive",price:"385",id:"105"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221188F049069_1/mm6-maison-margiela-ssense-exclusive-white-xxl-triangle-tote.jpg",brand:"MM6 MAISON MARGIELA",name:"SSENSE Exclusive",price:"385",id:"106"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F125035_1/manolo-blahnik-blue-araspemu-heeled-sandals.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"800",id:"107"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F125003_1/manolo-blahnik-black-scolto-heeled-sandals.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"700",id:"108"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F122024_1/manolo-blahnik-black-trina-heels.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"1155",id:"109"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F122004_1/manolo-blahnik-pink-satin-hangisi-heels.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"945",id:"110"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F125002_1/manolo-blahnik-beige-scolto-heeled-sandals.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"710",id:"111"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F125034_1/manolo-blahnik-black-araspemu-heeled-sandals.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"800",id:"112"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F118000_1/manolo-blahnik-black-satin-hangisi-ballerina-flats.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"1020",id:"113"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F122029_1/manolo-blahnik-brown-maysale-pumps.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"700",id:"114"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F125037_1/manolo-blahnik-black-caracol-heeled-sandals.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"820",id:"115"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F125006_1/manolo-blahnik-brown-susa-heeled-sandals.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"880",id:"116"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F124000_1/manolo-blahnik-black-susa-sandals.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"795",id:"117"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F122005_1/manolo-blahnik-grey-satin-hangisi-heels.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"780",id:"118"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F122009_1/manolo-blahnik-black-hangisimu-50-heeled-sandals.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"1020",id:"119"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F118002_1/manolo-blahnik-white-hangisi-ballerina-flats.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"945",id:"120"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F122002_1/manolo-blahnik-yellow-satin-hangisi-heels.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"905",id:"121"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F052000_1/givenchy-white-cotton-mini-dress.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"945",id:"122"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F054001_1/givenchy-black-viscose-midi-dress.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"685",id:"123"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F054002_1/givenchy-pink-viscose-midi-dress.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"1775",id:"124"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F054003_1/givenchy-black-viscose-midi-dress.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"1775",id:"125"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F358001_1/givenchy-pink-nylon-bodysuit.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"1220",id:"126"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F358000_1/givenchy-black-4g-bodysuit.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"435",id:"127"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F096003_1/givenchy-pink-viscose-sweater.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"440",id:"128"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F098000_1/givenchy-black-cotton-sweatshirt.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"790",id:"129"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F110006_1/givenchy-white-cotton-t-shirt.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"660",id:"130"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F099001_1/givenchy-black-viscose-turtleneck.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"505",id:"131"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F099002_1/givenchy-beige-viscose-turtleneck.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"505",id:"132"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221249F063018_1/jil-sander-green-cotton-blazer.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"770",id:"133"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221168F054007_1/maison-margiela-blue-cotton-shirt.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"770",id:"134"},
]


export const Womenswear = () => {

    const [data,setData] = useState([])
    useEffect (()=>{
           
            setData(womenProduct)
},[])
    
    const handleSort = (e) => {
     
        let data2 = data.sort((a, b) => {
        
        if (e === 'lowest')
         { return a.price - b.price;
            } else if (e === 'highest') {
                return b.price - a.price;
      }
        })
       // console.log(data2)
       setData([...data2])
      
    }
   
  return (
    <div>
        <Navbar />
        <div className="menswear-container">

            <div className="mens-category">
                <div>
                    <div className="mens-category-title">
                        <h5>ALL CATEGORIES </h5>
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
                        <h5>ALL DESIGNERS </h5>
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
                        <Link key={e.id} className="mens-data-item" to={`${e.id}`}>
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
                            <h5>SORT </h5>
                    </div>
                    <div className="mens-category-list">
                            <ul> Latest arrivals</ul>
                            <ul> Trending</ul>
                            <ul onClick={()=>handleSort("lowest")} value="lowest"> Price: Low to high</ul>
                            <ul onClick={()=>handleSort("highest")} value="highest"> Price: High to low </ul>
                    </div>
                    <div className="mens-category-title">
                            <h5>COLORS</h5>
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
