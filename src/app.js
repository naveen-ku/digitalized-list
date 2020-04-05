console.log("App is running");

// JSX - JavaScript XML

var user = {
  name: "Naveen",
  age: "22",
  location: "India",
};
var template = (
  <div>
    <h1>ToDo Mix</h1>

    <ul>
      <h3>{user.name}</h3>
      <li>Age: {user.age}</li>
      <li>Location: {user.location}</li>
    </ul>
  </div>
);

ReactDOM.render(template, document.getElementById("root"));
