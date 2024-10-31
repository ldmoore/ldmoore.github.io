import React, { useState } from 'react';
import './App.css';
import items from "./items";
import HomeCard from "./components/HomeCard";
import CardInfo from "./components/CardInfo";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  
  function selectAction(itemName) {
    setSelectedItem(itemName);
  }

  return (<div className="App">
  {selectedItem ? (
      <CardInfo item={items[selectedItem]} nullAction={() => selectAction(null)} />
  ) : (
    <div>
      <h1>👋 Hi, I'm Lucas</h1>
      <div className="App-list-parent">
        {Object.keys(items).map((item, index) => (
          <HomeCard key={index} item={items[item]} selectAction={() => selectAction(item)} />
        ))}
      </div>
    </div>
  )}
  <section id="contactSection">
    <br></br>
    <hr></hr>
    <h2>Contact: <a target="about:blank" href="mailto:ldmoore0205@gmail.com"><IoMdMail /></a> <a target="about:blank" href="https://www.linkedin.com/in/lucas-moore-unc"><FaLinkedin /></a> <a target="about:blank" href="https://www.github.com/ldmoore"><FaGithub /></a></h2>
  </section>
  </div>);
}

export default App;
