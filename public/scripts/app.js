"use strict";

console.log("App is running");

// JSX - JavaScript XML

var user = {
  name: "Naveen",
  age: "22",
  location: "India"
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      "li",
      null,
      "Location: ",
      location
    );
  } else {
    /*If condition is not satisfied then by default undefined is returned, 
    so we do not need to explicitely define else block.*/
    return undefined;
  }
}
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
    getLocation(user.location)
  )
);

ReactDOM.render(template, document.getElementById("root"));
