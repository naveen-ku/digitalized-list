class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };

    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle App</h1>
        <button onClick={this.toggleVisibility}>
          {this.state.visibility ? "Hide Details" : "Show Details"}
        </button>
        {this.state.visibility && <p>How you doin?</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("root"));

// //My Version

// const app = {
//     heading: "Visibility Toggle",
//     buttonText: "Show details",
//     text: "hello how are you",
//   };

//   const onClickButton = (event) => {
//     if (app.buttonText === "Show details") {
//       app.buttonText = "Hide details";
//     } else {
//       app.buttonText = "Show details";
//     }
//     renderVisibilityToggle();
//   };

//   const renderVisibilityToggle = () => {
//     const template = (
//       <div>
//         <h1>{app.heading}</h1>
//         <button onClick={onClickButton}>{app.buttonText}</button>
//         {app.buttonText ==="Hide details"? <p>{app.text}</p>:"" }
//       </div>
//     );

//     ReactDOM.render(template, document.getElementById("root"));
//   };

//   renderVisibilityToggle();

//   //Instructor Version

// let visibility = false;
// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? "Hide details" : "Show details"}
//       </button>
//       { visibility && (
//         <div>
//           <p>Hello how are you?</p>
//         </div>
//       )}
//     </div>
//   );

//   ReactDOM.render(template, document.getElementById("root"));
// };

// render();
