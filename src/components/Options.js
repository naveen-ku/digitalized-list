import React from "react";
import Option from "./Option";

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
      <div className="widget-header">
        <h3 className="widget-header__title">Your List</h3>
        <button
          className="button button--link"
          onClick={props.handleDeleteOptions}
        >
          Remove All
        </button>
      </div>
      {optionsList.length === 0 && (
        <p className="widget__message">Please add options to get started.</p>
      )}
      {optionsList.map((option) => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

export default Options;
