console.log("App is running");

// JSX - JavaScript XML

var user = {
  name: "Naveen",
  age: "22",
  location: "India",
};

function getLocation(location) {
  if (location) {
    return <li>Location: {location}</li>;
  } else {
    /*If condition is not satisfied then by default undefined is returned, 
    so we do not need to explicitely define else block.*/
    return undefined;
  }
}
var template = (
  <div>
    <h1>ToDo Mix</h1>

    <ul>
      <h3>{user.name}</h3>
      <li>Age: {user.age}</li>
      {getLocation(user.location)}
    </ul>
  </div>
);

ReactDOM.render(template, document.getElementById("root"));
