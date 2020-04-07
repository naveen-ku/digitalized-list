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
  title: "ToDo Mix",
  subtitle: "Digitalize the day to day record.",
  options: []
};

var onFormSubmit = function onFormSubmit(event) {
  event.preventDefault();
  // console.log(event.target.elements[0].value)
  // ---------------OR------------------
  // console.log(event.target.elements.option.value) //Because elements are indexed by names, so we can directy access them by name.
  var option = event.target.elements.option.value;
  if (option) {
    app.options.push(option);
    event.target.elements.option.value = "";
  }
  renderList();
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  renderList();
};

var renderList = function renderList() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      "p",
      null,
      app.subtitle
    ),
    React.createElement(
      "p",
      null,
      app.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "button",
      { onClick: onRemoveAll },
      "Remove All"
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (option) {
        return React.createElement(
          "li",
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Submit"
      )
    )
  );

  ReactDOM.render(template, document.getElementById("root"));
};

renderList();
