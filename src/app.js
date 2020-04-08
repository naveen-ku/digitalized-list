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
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}


class Options extends React.Component {
  render() {
    // console.log(this.props.options);
    const optionsList = this.props.options;
    // console.log(optionsList)
    return (
      <div>
        Options Component
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
  render() {
    return <div>Add Option Component</div>;
  }
}

ReactDOM.render(<ToDoMixApp />, document.getElementById("root"));
