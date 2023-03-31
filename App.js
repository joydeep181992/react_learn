{
  /* 
    <div id="parent">
        <div id="child">
            <h1>Hello h1</h1>
            <h2>Hello h2</h2>
        </div>
        <div id="child2">
            <h1>Hello h1</h1>
            <h2>Hello h2</h2>
        </div>
    </div>; 

    Reactelement(js object) => HTML(browser understand)

    */
}

import React from "react";
import ReactDOM from "react-dom/client";

const header = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello from h1 🚀"),
    React.createElement("h2", {}, "Hello from h2 😘"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello from h1"),
    React.createElement("h2", {}, "Hello from h2"),
  ]),
]);

console.log(header);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(header);
