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

const app = {
  heading: "Visibility Toggle",
  buttonText: "Show details",
  text: "hello how are you",
};

const onClickButton = (event) => {
  if (app.buttonText === "Show details") {
    app.buttonText = "Hide details";
  } else {
    app.buttonText = "Show details";
  }
  renderVisibilityToggle();
};

const renderVisibilityToggle = () => {
  const template = (
    <div>
      <h1>{app.heading}</h1>
      <button onClick={onClickButton}>{app.buttonText}</button>
      {app.buttonText ==="Hide details"? <p>{app.text}</p>:"" }
    </div>
  );

  ReactDOM.render(template, document.getElementById("root"));
};

renderVisibilityToggle();
