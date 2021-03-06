import React from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import OptionModal from "./OptionModal";
export default class ToDoMixApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      selectedOption: undefined,
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleSelectedOption = this.handleSelectedOption.bind(this);
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch (e) {
      // DO nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  //handleDeleteOptions
  handleDeleteOptions() {
    // this.setState(() => {
    //   return {
    //     options: [],
    //   };
    // });

    //Alternate Syntax
    this.setState(() => ({ options: [] }));
  }

  //handleDeleteOption ->Delete a particular option
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      }),
    }));
  }
  //handlePick
  handlePick() {
    const randumNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randumNum];
    this.setState(() => {
      return {
        selectedOption: option,
      };
    });
  }
  //handleAddoption
  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }
    // console.log(option);
    // this.setState((prevState) => {
    //   return {
    //     options: prevState.options.concat(option),
    //   };
    // });

    //Alternate syntax
    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  }

  handleSelectedOption() {
    this.setState(() => {
      return {
        selectedOption: undefined,
      };
    });
  }
  render() {
    const subtitle = "Digitalize the day to day record.";

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleSelectedOption={this.handleSelectedOption}
        />
      </div>
    );
  }
}
