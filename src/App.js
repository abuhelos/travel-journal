import React from "react"
import Card from "./Components/Card"
import Nav from "./Components/Nav"
import data from "./data"
import "../src/style.css"

function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
        />
    )
  })


  return (
    <div className="App">
      <Nav />
      {cards}
    </div>
  );
}

export default App;