import { useState } from "react";
import "./Checkout.css";
import imagev from "../icons/visa.svg"
import imagem from "../icons/mastercard.svg"
import imagep from "../icons/paypal.svg"
import imagea from "../icons/alipay.svg"
import {useCart} from "react-use-cart";
import { Link } from "react-router-dom";

let data=JSON.parse(localStorage.getItem("Items"))||[];
export const Checkout=()=>{
    const { totalUniqueItems, cartTotal, emptyCart} = useCart();
    const [buttonVal, setButtonVal]=useState("PLACE ORDER");
    let handleChange=(e)=>{
        const { id, value } = e.target;
            console.log(id,value)
            setButtonVal(id)
    }
    let sum=0
   data.map((e)=>{
       
       let x=parseInt(e.price)
       sum+=x
       return sum  
   })

 const submitDone=()=>{
    alert("Your Order is Successfully Placed!!");
    window.location.href="/"; 
    localStorage.clear();
}
 
    return (
        <div>
            <div className="imageHolder">
                <img style={{cursor:"pointer"}} onClick={()=>{window.location.href="/"}} src="https://res.cloudinary.com/ssenseweb/image/upload/v1471963917/web/ssense_logo_v2.svg" alt="" />
            </div>
            <div className="checkoutTab">
                <div className="checkoutMain">
                    <div className="checkoutTopTitle">CHECKOUT</div>
                    <div className="shippingHead">SHIPPING / BILLING ADDRESS</div>
                    <hr/>
                    <br/>
                    <div className="addressHolder">
                        <div className="fillDetails">
                            <div>
                                <label style={{textAlign:"left",fontSize:"11px"}}>Full Name</label>
                                <input style={{height:"30px"}} type="text" name="firstName"/>
                            </div>
                        </div>
                        <div className="fillDetails">
                            <div>
                                <label style={{textAlign:"left",fontSize:"11px"}}>Locality</label>
                                <input style={{height:"30px"}} type="text" name="streetAddress"/>
                            </div>
                        </div>
                        <div className="fillDetails">
                            <div>
                                <label style={{textAlign:"left",fontSize:"11px"}}>City</label>
                                <input style={{height:"30px"}} type="text" name="city"/>
                            </div>
                            <div>
                                <label style={{textAlign:"left",fontSize:"11px"}}>PINCode</label>
                                <input style={{height:"30px",width:"40%"}} type="text" name="postalcode"/>
                            </div>
                        </div>
                        <div className="fillDetails">
                            <div>
                                <label style={{textAlign:"left",fontSize:"11px"}}>State/Province</label>
                                <input style={{height:"30px",width:"40%"}} type="text" name="state"/>
                            </div>
                        </div>
                        <div className="fillDetails">
                            <div>
                                <label style={{textAlign:"left",fontSize:"11px"}}>Mobile No.</label>
                                <input style={{height:"30px",width:"40%"}} type="text" name="company"/>
                                <p style={{textAlign:"left", color:"gray",fontSize:"10px"}}>May be used to assist with Delivery</p>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="shipping">
                        <div className="shippingmethod">SHIPPING METHOD</div>
                        <hr/>
                        <div className="shippingbox">
                            <input type="radio" name="shippingbox" checked />
                            <div>$0.00 USD | 5 - 7 days | Express</div>
                        </div> 
                    </div>
                    <br/>
                    <div className="payment">
                        <div className="paymentmethod">PAYMENT METHOD</div>
                        <hr/>
                        <div className="paymentbox">
                            <div className="cardpayment">
                                <input type="radio" id="PLACE ORDER" name="payopt" onChange={(e)=>handleChange(e)}/>
                                <div style={{marginLeft:"1%"}}>Pay with credit or debit card</div>
                                <img src={imagev} style={{marginLeft:"1%"}}/>
                                <img src={imagem}  style={{marginLeft:"1%"}}/>
                            </div>
                            <div className="paypalpayment" >
                                <input type="radio" id="PAY WITH PAY PAL" name="payopt" onChange={(e)=>handleChange(e)}/>
                                <div style={{marginLeft:"1%"}}>Pay with Pay Pal</div>
                                <img src={imagep} style={{marginLeft:"1%"}}/>
                            </div>
                            <div className="alipaypayment">
                                <input type="radio" id="CONTINUE WITH ALI PAYMENT" name="payopt" onChange={(e)=>handleChange(e)}/>
                                <div style={{marginLeft:"1%"}}>Pay with Alipay</div>
                                <img src={imagea} style={{marginLeft:"1%"}}/>
                            </div>
                        </div> 
                    </div>
                    <br/>
                    {(buttonVal==="PLACE ORDER")? <div>
                    <div className="shipping">
                        <div className="shippingmethod">CARD DETAILS</div>
                        <hr/><br/>
                        <div className="fillDetails">
                            <div>
                                <label style={{textAlign:"left",fontSize:"11px"}}>Card Number</label>
                                <input style={{height:"30px"}} type="number" name="cnum"/>
                            </div>
                            <div>
                                <label style={{textAlign:"left",fontSize:"11px"}}>Valid Through</label>
                                <input style={{height:"30px",width:"40%"}} type="date" name="expdate"/>
                            </div>
                        </div>
                        <div className="fillDetails">
                            <div>
                                <label style={{textAlign:"left",fontSize:"11px"}}>Card's Holder Name</label>
                                <input style={{height:"30px"}} type="text" name="cname"/>
                            </div>
                            <div>
                                <label style={{textAlign:"left",fontSize:"11px"}}>Otp</label>
                                <input style={{height:"30px",width:"40%",textAlign:"center"}} type="password" name="otp"/>
                            </div>
                        </div>
                    </div>
                    
                    </div>:<hr/>}
                    <div className="footer">
                        <div>Terms & Conditions</div>
                        <div>Privacy Policy</div>
                        <a/>
                    </div>
                </div>
                <div>
                     <div className="dataHead">ORDER SUMMARY : {totalUniqueItems} ITEMS</div>
                    <hr/>
                    <br/>   
{/* ................................................................................... */}

                    <div className="productChoosed">{
                       data.map((e)=>{
                           return (
                            <div className="cartDiv" key={e.id}>
                                <img src={e.img} alt="miss" className="cardImage"/>
                                <div style={{marginTop:"10px"}}><h5>{e.name}</h5>
                                    <p>$ {e.price}</p></div>
                                
                            </div>
                           )
                       })
                      
                    }</div>   
                    <div className="dataHead">COUNTRY/REGION: INDIA </div>        
                    <hr/>  
                    <div className="total">
                        <div>
                            <p>Subtotal</p>
                            <p>$ {sum}</p>
                        </div>
                        <div>
                            <p>Shippingtotal</p>
                            <p>(free)</p>
                        </div>
                        <br/>
                        <hr />
                        
                    </div>
                    <div className="orderTotal">
                        <p>Ordertotal(USD)</p>
                        <p>$ {sum}</p>
                    </div>
                    <div >
                        <p style={{fontSize:"11px", textAlign:"left"}}>
                            Important Notice<br/>enter
                            Our prices do not include Duty and VAT. Please consult your<br/>country/region???s customs legislation for more information about potential<br/> additional charges.
                        </p>
                    </div>
                    <br/>
                    <div>
                        <button className="placeOrder" onClick={()=>{submitDone()}}>{buttonVal}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}