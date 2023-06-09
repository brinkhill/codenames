"use client";

import "./black.css";
import React, { useEffect, useState } from "react";

export default function Black() {
 const [inputValue, setInputValue] = useState("");

 useEffect(() => {
  const savedValue = localStorage.getItem("assasinValue");
  if (savedValue) {
   setInputValue(savedValue);
  }
 }, []);

 useEffect(() => {
  localStorage.setItem("assasinValue", inputValue);
 }, [inputValue]);

 const handleInputChange = (e) => {
  setInputValue(e.target.value);
 };

 return (
  <div className="black">
   <div className="alert">
    <svg
     xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     strokeWidth="2"
     strokeLinecap="round"
     strokeLinejoin="round"
    >
     <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
     <line x1="12" x2="12" y1="9" y2="13" />
     <line x1="12" x2="12.01" y1="17" y2="17" />
    </svg>
   </div>

   <input className="black-word" placeholder="enter assassin..." value={inputValue} onChange={handleInputChange}></input>
   <div className="alert">
    <svg
     xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     strokeWidth="2"
     strokeLinecap="round"
     strokeLinejoin="round"
    >
     <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
     <line x1="12" x2="12" y1="9" y2="13" />
     <line x1="12" x2="12.01" y1="17" y2="17" />
    </svg>
   </div>
  </div>
 );
}
