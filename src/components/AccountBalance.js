// src/components/AccountBalance.js

import React, {Component} from 'react';

class AccountBalance extends Component {
  render() {
    return (
      <>
        <div>
          Previous Balance: {this.props.accountBalance}   
        </div>
        <div>
        Debits: {this.props.debits}
      </div>
      <div>
        Credits: {this.props.credit}
      </div>
      <div>
        Total Account Balance: {this.props.totalAccountBalance}
      </div>
      </>
    );
  }
}

export default AccountBalance;