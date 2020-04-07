//My Version

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