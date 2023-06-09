import "./main.css";
import Black from "./components/black/Black";
import Card from "./components/cards/Card";

export default function Main() {
 return (
  <main>
   <div className="words-header">
    <div className="lock">
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
      class="lucide lucide-lock"
     >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
     </svg>
    </div>

    <div className="add-extra">
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
      class="lucide lucide-plus-square"
     >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="12" x2="12" y1="8" y2="16" />
      <line x1="8" x2="16" y1="12" y2="12" />
     </svg>
    </div>
   </div>
   <Black />
   <div className="words-box">
    <div className="row">
     <Card />
     <Card />
     <Card />
    </div>
    <div className="row">
     <Card />
     <Card />
     <Card />
    </div>
    <div className="row">
     <Card />
     <Card />
     <Card />
    </div>
   </div>
  </main>
 );
}
