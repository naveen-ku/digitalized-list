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

let count = 0;
const addOne = () => {
  console.log("Add one");
};

const minusOne = () => {
  console.log("Minus one");
};
const reset = () => {
  console.log("Reset");
};
const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>Reset</button>
  </div>
);

ReactDOM.render(templateTwo, document.getElementById("root"));
