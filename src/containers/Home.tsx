import { Component } from 'react';
//router import
import { Link } from 'react-router-dom';
//Material-UI import
import { StyledButton } from '../styles/Styles'

declare const window: any;

class Home extends Component {

  //Check if metamask is installed
  connectMetamask = (): void => {
    if(window.ethereum !== undefined) {
      window.ethereum.enable();
    } else {
      alert('Please install Metamask to use this application!')
    }
  }

  componentDidMount() {
    this.connectMetamask();
  }

  render() {
    return (
      <div>
        <hr />
        <div>
          <StyledButton color="primary">
            <Link to="/employer">Contractors Portal</Link>
          </StyledButton>
        </div>
        <div>
          <StyledButton color="secondary">
            <Link to="/employer">Employer Portal</Link>
          </StyledButton>
        </div>
        <div>
          {window.ethereum === undefined ? <StyledButton size="small" href="https://metamask.io/download.html">Install Metamask</StyledButton> : null}
        </div>
      </div>
    );
  }
}

export default Home;
