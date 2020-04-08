class ToDoMixApp extends React.Component {
  render() {
    const title = "ToDo Mix App";
    const subtitle = "Digitalize the day to day record.";
    const options = ["One", "Two", "Three"];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  onRandomPick() {
    alert("onRandomPick");
  }
  render() {
    return (
      <div>
        <button onClick={this.onRandomPick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log(this.props.options);
    alert("Remove All");
  }
  render() {
    // console.log(this.props.options);
    const optionsList = this.props.options;
    // console.log(optionsList)
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {optionsList.map((option) => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}
class Option extends React.Component {
  render() {
    return <p>{this.props.optionText}</p>;
  }
}

class AddOption extends React.Component {
  submitForm(event) {
    event.preventDefault();
    const dataField = event.target.elements.option.value.trim();
    if (dataField) {
      alert(dataField);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input type="text" name="option" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<ToDoMixApp />, document.getElementById("root"));
