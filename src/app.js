class ToDoMixApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  //handleDeleteOptions
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: [],
      };
    });
  }
  //handlePick
  handlePick() {
    const randumNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randumNum];
    alert(option);
  }
  //handleAddoption
  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }
    // console.log(option);
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option),
      };
    });
  }
  render() {

    const subtitle = "Digitalize the day to day record.";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

// class Header extends React.Component {
//   render() {
//     // console.log(this.props);
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

//Used Stateless Component because here we don't need to change the state
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

//Setting up of default props value
Header.defaultProps ={ 
  title: "ToDo Mix App"
}


// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button
//           disabled={!this.props.hasOptions > 0}
//           onClick={this.props.handlePick}
//         >
//           What should I do?
//         </button>
//       </div>
//     );
//   }
// }

//Used Stateless Component because here we don't need to change the state
const Action = (props) => {
  return (
    <div>
      <button disabled={!props.hasOptions > 0} onClick={props.handlePick}>
        What should I do?
      </button>
    </div>
  );
};

// class Options extends React.Component {
//   render() {
//     // console.log(this.props.options);
//     const optionsList = this.props.options;
//     // console.log(optionsList)
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//         {optionsList.map((option) => (
//           <Option key={option} optionText={option} />
//         ))}
//       </div>
//     );
//   }
// }

//Used Stateless Component because here we don't need to change the state
const Options = (props) => {
  const optionsList = props.options;
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {optionsList.map((option) => (
        <Option key={option} optionText={option} />
      ))}
    </div>
  );
};
// class Option extends React.Component {
//   render() {
//     return <p>{this.props.optionText}</p>;
//   }
// }

//Used Stateless Component because here we don't need to change the state
const Option = (props) => {
  return <p>{props.optionText}</p>;
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      error: undefined,
    };
  }
  submitForm(event) {
    event.preventDefault();
    const dataField = event.target.elements.option.value.trim();
    const error = this.props.handleAddOption(dataField);
    event.target.elements.option.value = "";
    this.setState(() => {
      return {
        error: error,
      };
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input type="text" name="option" />
          <button>Submit</button>
        </form>
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}

ReactDOM.render(<ToDoMixApp />, document.getElementById("root"));
