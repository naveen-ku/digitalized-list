import React from 'react';


export default class AddOption extends React.Component {
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
  
      // this.setState(() => {
      //   return {
      //     error: error,
      //   };
      // });
  
      //Alternate syntax
      this.setState(() => ({ error: error }));
      if (!error) {
        event.target.elements.option.value = "";
      }
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