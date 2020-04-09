class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }

  componentDidMount() {
    const countInStringForm = localStorage.getItem("count");
    const count = parseInt(countInStringForm, 10);
    if (!isNaN(count)) {
      this.setState(() => ({ count: count }));
    }
    console.log("cdm");
  }

  componentDidUpdate(prevProps, prevState) {
    const count = this.state.count;
    if (prevState.count !== count) {
      localStorage.setItem("count", count);
      console.log("cdu");
    }
  }

  addOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  minusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }

  resetCount() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.resetCount}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));

// Copy the code in app.js to see the work.

// let count = 0;
// const addOne = () => {
//   // console.log("Add one");
//   count++;
//   renderCounterApp();
// };

// const minusOne = () => {
//   // console.log("Minus one");
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   // console.log("Reset");
//   count = 0;
//   renderCounterApp();
// };

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, document.getElementById("root"));
// };

// renderCounterApp();
