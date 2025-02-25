const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React!!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
        "div",
        { id: "child" },
        React.createElement("h1", {}, "I am inside parent!!!!!!!!")
      ),
      React.createElement(
        "div",
        { id: "child2" },
        React.createElement("h2", {}, "I am inside parent!!!!!!!!")
      )
  ]
);
root.render(parent);
