import React from "react";
import ReactDOM from "react-dom/client";

// ReactElement = React.createElement it creates an Javascript object
// ReactDOM = ReactDOM.createDOM it uses the browser dom
// ReactDOM has Render in it, which render the React element into HTMLElement
// root.render(ReactElement)

// To avoid all the ReactElement creation the FB developer created JSX
// JSX is html like syntax, JSX is not HTML in JS

// React Element
const heading = <h1 className="heading">Hello React</h1>;

// React Components
const TitleComponents = () => <h1>Hello Title component</h1>;

// Heading Components
const HeadingComponents = () => {
  return (
    <div id="container">
      <TitleComponents />
      <TitleComponents></TitleComponents>
      {TitleComponents()}
      {heading}
      <h2>This is heading components</h2>
    </div>
  );
};

// React components

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponents />);
