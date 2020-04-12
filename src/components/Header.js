import React from 'react';


  // class Header extends React.Component {
  //   render() {
  //     // console.log(this.props);
  //     return (
  //       <div>
  //         <h1>{this.props.title}</h1>
  //         <h2>{this.props.subtitle}</h2>
  //       </div>
  //     );
  //   }
  // }
  
  //Used Stateless Component because here we don't need to change the state
  const Header = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
    );
  };
  
  //Setting up of default props value
  Header.defaultProps = {
    title: "ToDo Mix App",
  };
  
  export default Header;