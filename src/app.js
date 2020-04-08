class ToDoMixApp extends React.Component {
  render() {
    const title ="ToDo Mix App"
    return (
      <div>
        <Header title={title}/>
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>Digitalize the day to day record.</h2>
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
class Option extends React.Component {
  render() {
    return <div>Option Component</div>;
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        Options Component
        <Option />
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return <div>Add Option Component</div>;
  }
}

ReactDOM.render(<ToDoMixApp />, document.getElementById("root"));
