import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { CheckBoxGroup } from "./components/CheckboxGroup";
import { Input } from "./components/Input";
import { RadioGroup } from "./components/RadioGroup";

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
        onSubmit={(event) => {
          event.preventDefault();
          const movieGenres = [...event.target.movieGenre]
            .filter((input) => input.checked)
            .map((input) => input.value);
          console.log(movieGenres);

          const musicGenres = event.target.musicGenre.value
          console.log(musicGenres);

        }}
      >
        <CheckBoxGroup
          question="Choose a movie genre:"
          options={["action", "comedy", "thriller", "drama"]}
          name="movieGenre"
        />

        <RadioGroup
          question="Choose a music genre"
          options={["pop", "rock", "indie"]}
          name="musicGenre"
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
