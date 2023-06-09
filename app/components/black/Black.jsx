import "./black.css";

export default function Black() {
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
     class="lucide lucide-alert-triangle"
    >
     <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
     <line x1="12" x2="12" y1="9" y2="13" />
     <line x1="12" x2="12.01" y1="17" y2="17" />
    </svg>
   </div>

   <input className="black-word" placeholder="enter assassin..."></input>
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
     class="lucide lucide-alert-triangle"
    >
     <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
     <line x1="12" x2="12" y1="9" y2="13" />
     <line x1="12" x2="12.01" y1="17" y2="17" />
    </svg>
   </div>
  </div>
 );
}
