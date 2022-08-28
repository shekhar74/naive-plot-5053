import './App.css';
import Landing from "./components/landing/Landing";
import { Menswear } from "./components/products/Menswear";
import { Womenswear } from "./components/products/Womenswears";
import { Everything } from "./components/products/everything";
import { Routes, Route } from "react-router-dom";
import { Checkout } from "./components/checkout/CheckOut";
import {MenDetails}from "./components/products/MenDetails";
import {WomenDetails} from "./components/products/WomenDetails";
import {EveryDetails} from "./components/products/EveryDetails";


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/menswear" element={<Menswear />} />
        <Route path="/Womenswear" element={<Womenswear />} />
        <Route path="/everything" element={<Everything />} />
        <Route path="/checkout" element={<Checkout />} /> 
        <Route path="/menswear/:id" element={<MenDetails/>}></Route> 
       <Route path="/womenswear/:id" element={<WomenDetails/>}></Route>
        <Route path="/everything/:id" element={<EveryDetails/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;