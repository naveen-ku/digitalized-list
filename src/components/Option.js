import React from 'react';

  // class Option extends React.Component {
  //   render() {
  //     return <p>{this.props.optionText}</p>;
  //   }
  // }
  
  //Used Stateless Component because here we don't need to change the state
  const Option = (props) => {
    return (
      <p>
        {props.optionText}
        <button
          onClick={(event) => {
            props.handleDeleteOption(props.optionText);
          }}
        >
          Remove
        </button>
      </p>
    );
  };
  
  export default Option;