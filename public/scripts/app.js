"use strict";

console.log("App is running");

// JSX - JavaScript XML
// const user = {
//   name: "Naveen",
//   age: "22",
//   location: "India",
// };

// const getLocation = (location) => {
//   if (location) {
//     return <li>Location: {location}</li>;
//   } else {
//     /*If condition is not satisfied then by default undefined is returned, so we do not need to explicitely define else block.*/
//     return undefined;
//   }
// };
// const template = (
//   <div>
//     <h1>ToDo Mix</h1>

//     <ul>
//       <h3>{user.name}</h3>
//       <li>Age: {user.age}</li>
//       {getLocation(user.location)}
//     </ul>
//   </div>
// );

var count = 0;
var addOne = function addOne() {
  console.log("Add one");
};

var minusOne = function minusOne() {
  console.log("Minus one");
};
var reset = function reset() {
  console.log("Reset");
};
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Count: ",
    count
  ),
  React.createElement(
    "button",
    { onClick: addOne },
    "+1"
  ),
  React.createElement(
    "button",
    { onClick: minusOne },
    "-1"
  ),
  React.createElement(
    "button",
    { onClick: reset },
    "Reset"
  )
);

ReactDOM.render(templateTwo, document.getElementById("root"));
