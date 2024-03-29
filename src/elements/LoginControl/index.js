import * as React from 'react';
import  Greeting, {LoginButton, LogoutButton} from '../Greeting';

class LoginControl extends React.Component {

  constructor(props) {
    super(props);

    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);

    this.state={
      isLoggedIn: false
    }
  }

  handleLoginClick() {
    this.setState({ isLoggedIn:true })
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn:false })
  }s

  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn}/>
        {button}
      </div>
    );

  }

}

export default LoginControl;