"use client";

import "./card.css";
import React, { useEffect, useState } from "react";

export default function Card() {
 const [inputValue, setInputValue] = useState("");

 // Load the saved input value from local storage on component mount
 useEffect(() => {
  const savedValue = localStorage.getItem("inputValue");
  if (savedValue) {
   setInputValue(savedValue);
  }
 }, []);

 // Save the input value to local storage whenever it changes
 useEffect(() => {
  localStorage.setItem("inputValue", inputValue);
 }, [inputValue]);

 // Handle input value change
 const handleInputChange = (e) => {
  setInputValue(e.target.value);
 };
 return (
  <div className="card">
   <textarea className="card-input" type="text" placeholder="your word here" value={inputValue} onChange={handleInputChange} />
   {/* <button className="done-button">done</button> */}
  </div>
 );
}
