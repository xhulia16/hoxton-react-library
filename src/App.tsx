import "./App.css";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button 
      size="small"
      onClick={()=>{
        alert('hello')}}
      >
        Hello
        </Button>

      <Button
      size="big"
      onClick={()=>{alert('Bye')}}
      >
        Bye
      </Button>
    </div>
  );
}

export default App;
