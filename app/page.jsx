import "./main.css";
import Black from "./components/black/Black";
import Card from "./components/cards/Card";

export default function Main() {
 return (
  <main>
   <Black />
   <div className="words-box">
    <div className="row">
     <Card cardId={1} />
     <Card cardId={2} />
     <Card cardId={3} />
    </div>
    <div className="row">
     <Card cardId={4} />
     <Card cardId={5} />
     <Card cardId={6} />
    </div>
    <div className="row">
     <Card cardId={7} />
     <Card cardId={8} />
     <Card cardId={9} />
    </div>
   </div>
  </main>
 );
}
