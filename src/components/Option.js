import React from "react";

// class Option extends React.Component {
//   render() {
//     return <p>{this.props.optionText}</p>;
//   }
// }

//Used Stateless Component because here we don't need to change the state
const Option = (props) => {
  return (
    <div className="option">
      <p className="option__text">
        {props.count}. {props.optionText}
      </p>

      <button
        className="button button--link"
        onClick={(event) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default Option;
