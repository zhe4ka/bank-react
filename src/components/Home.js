  
  import React, { Component } from 'react';
  import AccountBalance from './AccountBalance';
  import {Link} from 'react-router-dom';
  import Bank from '../pictures/Bank.jpg';
  
  class Home extends Component {
    render() {
        
      return (
        <div >
            <img src={Bank} alt="bank" width="100%" height="200"/>
            
            <h1>Bank of React</h1>
           <Link to="/UserProfile">User Profile</Link>
           <br/>
           <Link to="/Credit">Credit</Link>
           <br/>
           <Link to="/Debit">Debiit</Link>
           <br/>
           <Link to="/Login">Login</Link>
           <AccountBalance accountBalance={this.props.accountBalance} debits={this.props.debits} credit={this.props.credit} totalAccountBalance={this.props.totalAccountBalance}/>
          </div>
      );
    }
  }
  
  export default Home;