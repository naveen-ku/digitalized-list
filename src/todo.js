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
    const option = event.target.elements.option.value;
    if (option) {
      app.options.push(option);
      event.target.elements.option.value = "";
    }
    renderList();
  };
  
  const onRemoveAll = () => {
    app.options = [];
    renderList();
  };
  const onMakeDecision = () => {
    const randumNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randumNum];
    alert(option);
  };
  
  const renderList = () => {
    const template = (
      <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
        {/* <p>{app.options.length}</p> */}
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>
          What shoul I do?
        </button>
        <button onClick={onRemoveAll}>Remove All</button>
        <ol>
          {app.options.map((option) => {
            return <li key={option}>{option}</li>;
          })}
        </ol>
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option" />
          <button>Submit</button>
        </form>
      </div>
    );
  
    ReactDOM.render(template, document.getElementById("root"));
  };
  
  renderList();
  