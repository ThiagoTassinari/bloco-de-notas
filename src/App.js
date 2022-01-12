import React, { Component } from "react";
import CardNota from "./Components/CardNota";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {
  render() {
    return (
      <section className="conteudo">
        <CardNota />
      </section>
    );
  }
}

export default App;
