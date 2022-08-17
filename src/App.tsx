import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { CheckBoxGroup } from "./components/CheckboxGroup";
import { Input } from "./components/Input";

function App() {
  return (
    <div className="App">
      <Button
        size="small"
        onClick={() => {
          alert("hello");
        }}
      >
        Hello
      </Button>

      <Button
        size="big"
        onClick={() => {
          alert("Bye");
        }}
      >
        Bye
      </Button>
      <Input />
      <form 
      onSubmit={event=>{
        event.preventDefault()
        const genres = [...event.target.genre]
        .filter(input => input.checked)
        .map(input => input.value)
        console.log(genres)
      }}>
        <CheckBoxGroup
          question="Choose a movie genre:"
          options={["action", "comedy", "thriller", "drama"]}
          name="genre"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
