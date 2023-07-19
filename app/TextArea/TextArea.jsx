"use client";

import "./TextArea.css";
import React, { useEffect, useState } from "react";

export default function TextArea() {
 const [inputValue, setInputValue] = useState("");

 useEffect(() => {
  const savedValue = localStorage.getItem("notes");
  if (savedValue) {
   setInputValue(savedValue);
  }
 }, []);

 useEffect(() => {
  localStorage.setItem("notes", inputValue);
 }, [inputValue]);

 const handleInputChange = (e) => {
  setInputValue(e.target.value);
 };

 return (
  <div className="notes-area">
   <textarea value={inputValue} onChange={handleInputChange} id="notes" className="notes" placeholder="notes:"></textarea>
  </div>
 );
}
