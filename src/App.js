import React from "react";

const list = [
  {
    name: "1",
    img:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.TMmeHZc2BO3lzL3tnLQjfgHaE8%26pid%3DApi&f=1",
  },
  {
    name: "2",
    img:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.atChPpvEjiXwckGgZypOBAHaEc%26pid%3DApi&f=1",
  },
  {
    name: "3",
    img:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.OUA9d_lOAtIrOXbbJitryQHaFF%26pid%3DApi&f=1",
  },
  {
    name: "4",
    img:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.e6d2nMN8uvbUBFQ-djaoRwHaE7%26pid%3DApi&f=1",
  },
  {
    name: "5",
    img:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.0LxXqpEEMDwcBWsdgi4Q7wHaEK%26pid%3DApi&f=1",
  },
];

function Food({ name, picture }) {
  return (
      <div>
        <h2> I like {name} </h2>
        <img src={picture}/>
      </div>
    );
}

function App() {
  return (
    <div>
      {
        list.map(dish => (<Food name={dish.name} picture={dish.img} />))
      }
    </div>
  );
}

export default App;
