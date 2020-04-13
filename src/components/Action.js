import React from "react";

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
      <button
        className="big-button"
        disabled={!props.hasOptions > 0}
        onClick={props.handlePick}
      >
        What should I do?
      </button>
    </div>
  );
};

export default Action;
