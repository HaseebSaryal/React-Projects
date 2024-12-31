import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import landingPageData from "./constants/webData";

function App() {

  const [number, setNumber] = useState(0)
  
  const controller = () => {
    setNumber(number  + 1)
    if(number == "20"){
      setNumber(20)
    }
  }

  const { header, hero, features, testimonials } = landingPageData;
  const user = {
    isLogin: false,
  };
  return (
    <div>

      <Header header={header} user={user} />
      <button className="flex border p-4 rounded-lg border-red-800 justify-center items-center ml-96"
      onClick={controller}>Counter {number}</button>
      {/* <p className="text-center">Count: </p> */}
      <Hero hero={hero} />
      
      <Features features={features} />
      <Testimonials testimonials={testimonials} />
      <Footer header={header} />
      
    </div>
  );
}

export default App