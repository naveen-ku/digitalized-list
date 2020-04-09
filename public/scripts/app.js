"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisibilityToggle = function (_React$Component) {
  _inherits(VisibilityToggle, _React$Component);

  function VisibilityToggle(props) {
    _classCallCheck(this, VisibilityToggle);

    var _this = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this, props));

    _this.state = {
      visibility: false
    };

    _this.toggleVisibility = _this.toggleVisibility.bind(_this);
    return _this;
  }

  _createClass(VisibilityToggle, [{
    key: "toggleVisibility",
    value: function toggleVisibility() {
      this.setState(function (prevState) {
        return {
          visibility: !prevState.visibility
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Visibility Toggle App"
        ),
        React.createElement(
          "button",
          { onClick: this.toggleVisibility },
          this.state.visibility ? "Hide Details" : "Show Details"
        ),
        this.state.visibility && React.createElement(
          "p",
          null,
          "How you doin?"
        )
      );
    }
  }]);

  return VisibilityToggle;
}(React.Component);

ReactDOM.render(React.createElement(VisibilityToggle, null), document.getElementById("root"));

// //My Version

// const app = {
//     heading: "Visibility Toggle",
//     buttonText: "Show details",
//     text: "hello how are you",
//   };

//   const onClickButton = (event) => {
//     if (app.buttonText === "Show details") {
//       app.buttonText = "Hide details";
//     } else {
//       app.buttonText = "Show details";
//     }
//     renderVisibilityToggle();
//   };

//   const renderVisibilityToggle = () => {
//     const template = (
//       <div>
//         <h1>{app.heading}</h1>
//         <button onClick={onClickButton}>{app.buttonText}</button>
//         {app.buttonText ==="Hide details"? <p>{app.text}</p>:"" }
//       </div>
//     );

//     ReactDOM.render(template, document.getElementById("root"));
//   };

//   renderVisibilityToggle();

//   //Instructor Version

// let visibility = false;
// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? "Hide details" : "Show details"}
//       </button>
//       { visibility && (
//         <div>
//           <p>Hello how are you?</p>
//         </div>
//       )}
//     </div>
//   );

//   ReactDOM.render(template, document.getElementById("root"));
// };

// render();
