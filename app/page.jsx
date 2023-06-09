import "./main.css";
import Black from "./components/black/Black";
import Card from "./components/cards/Card";

export default function Main() {
 return (
  <main>
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
