"use strict";

console.log("App is running");

// JSX - JavaScript XML

var user = {
  name: "Naveen",
  age: "22",
  location: "India"
};
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "ToDo Mix"
  ),
  React.createElement(
    "ul",
    null,
    React.createElement(
      "h3",
      null,
      user.name
    ),
    React.createElement(
      "li",
      null,
      "Age: ",
      user.age
    ),
    React.createElement(
      "li",
      null,
      "Location: ",
      user.location
    )
  )
);

ReactDOM.render(template, document.getElementById("root"));
