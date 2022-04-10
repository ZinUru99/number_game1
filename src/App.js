import React, { Component } from "react";
import Igrica from "./components/Igrica";
import Highscore from "./components/Highscore";
import Image from "./win.gif";


export default class App extends Component {
  constructor(props) {
    super(props);
    const stanje = JSON.parse(localStorage.getItem("stanje"));
    this.state = stanje
      ? stanje
      : {
          highscore: [],
          brojPokusaja: 0,
          feedback: "",
          zamisljeniBroj: Math.floor(Math.random() * 101),
        };
  }

  promijeniStanje = (feedback) => {
    let novoStanje;
    if (feedback === "pogodak") {
      let noviBroj = Math.floor(Math.random() * 101);
      novoStanje = {
        ...this.state,
        highscore: [...this.state.highscore, this.state.brojPokusaja + 1].sort(
          (a, b) => a - b
        ),
        brojPokusaja: 0,
        zamisljeniBroj: noviBroj,
        feedback:
          "YOU WON. You guessed right at " +
          (this.state.brojPokusaja + 1) +
          " tries. Play again." ,
      };
    } else if (feedback === "manji") {
      novoStanje = {
        ...this.state,
        brojPokusaja: this.state.brojPokusaja + 1,
        feedback: "WRONG! Try a lower number!",
      };
    } else if (feedback === "veći") {
      novoStanje = {
        ...this.state,
        brojPokusaja: this.state.brojPokusaja + 1,
        feedback: "WRONG! Try a higher number!",
      };
    }
    localStorage.setItem("stanje", JSON.stringify(novoStanje));
    this.setState(novoStanje);
  };

  render() {
    return (
      <div  style={{ textAlign: "center" }}>
        <Igrica
          brojPokusaja={this.state.brojPokusaja}
          zamisljeniBroj={this.state.zamisljeniBroj}
          feedback={this.state.feedback}
          promijeniStanje={(feedback) => this.promijeniStanje(feedback)}
        />

        <p><strong>Highscores:</strong></p>
        
        <Highscore highscore={this.state.highscore} />

        

       
        
      </div>
    );
  }
}
