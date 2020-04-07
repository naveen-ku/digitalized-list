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

var app = {
  heading: "Visibility Toggle",
  buttonText: "Show details",
  text: "hello how are you"
};

var onClickButton = function onClickButton(event) {
  if (app.buttonText === "Show details") {
    app.buttonText = "Hide details";
  } else {
    app.buttonText = "Show details";
  }
  renderVisibilityToggle();
};

var renderVisibilityToggle = function renderVisibilityToggle() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.heading
    ),
    React.createElement(
      "button",
      { onClick: onClickButton },
      app.buttonText
    ),
    app.buttonText === "Hide details" ? React.createElement(
      "p",
      null,
      app.text
    ) : ""
  );

  ReactDOM.render(template, document.getElementById("root"));
};

renderVisibilityToggle();
