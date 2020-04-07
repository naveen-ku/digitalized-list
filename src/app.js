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
  title: "ToDo Mix",
  subtitle: "Digitalize the day to day record.",
  options: [],
};

const onFormSubmit = (event) => {
  event.preventDefault();
  // console.log(event.target.elements[0].value)
  // ---------------OR------------------
  // console.log(event.target.elements.option.value) //Because elements are indexed by names, so we can directy access them by name.
  const option = event.target.elements.option.value
  if(option){
    app.options.push(option)
    event.target.elements.option.value = '';
  }
  renderList();
}

const onRemoveAll = () => {
  app.options=[];
  renderList();
}

const renderList = () => {
  const template = <div>
  <h1>{app.title}</h1>
  {app.subtitle && <p>{app.subtitle}</p>}
  <p>{app.options.length >0 ?'Here are your options': 'No options'}</p>
  <p>{app.options.length}</p>
  <button onClick={onRemoveAll}>Remove All</button>
  <ol>
    <li>Item one</li>
    <li>Item two</li>
  </ol>
  <form onSubmit={onFormSubmit}>
    <input type="text" name="option"/>
    <button>Submit</button>
  </form>
</div>;

ReactDOM.render(template, document.getElementById("root"));

}

renderList();