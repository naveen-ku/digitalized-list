console.log("App is running");

// JSX - JavaScript XML

var user = {
  name: "Naveen",
  age: "22",
  location: "India",
};

function getLocation(location) {
    if(location){
        return location;
    } else {
        return 'Unknown'
    }
}
var template = (
  <div>
    <h1>ToDo Mix</h1>

    <ul>
      <h3>{user.name}</h3>
      <li>Age: {user.age}</li>
      <li>Location: {getLocation(user.location)}</li>
    </ul>
  </div>
);

ReactDOM.render(template, document.getElementById("root"));
