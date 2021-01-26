import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';
//import axios from "axios"

class Credit extends Component {
    constructor() {
        super();
        this.state = {
                description:'',
                amount:0,       
            } 
        this.addDescription = this.addDescription.bind(this);
        this.addAmount = this.addAmount.bind(this);
        this.saveContent = this.saveContent.bind(this);   
        }  
        
        addDescription(e){
            let input = e.target.value
            this.setState({description : input})
        }  
    
        addAmount(e){
            console.log(e.target.value)
            this.setState({amount : e.target.value}) 
        }
    
        saveContent(){
            var today = new Date(),
    
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()+"T" 
            + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
            let obj ={
                description: this.state.description,
                amount:this.state.amount,
                date: date,
                id: "799b163d-c33b-4608-a85c-5b7e42a9eb9f",
            }
    
            this.props.updateBalance(obj)
        }

   
    render() {
        // const submit= (event)=>{
        //     event.preventDefault();
        //     let amount=event.target.amount.value;
        //     let description=event.target.description.value;
        //     let date=event.target.date.value;
        //     let obj={
        //          description: description,
        //          amount:amount,
        //          date:date
        //     }
        //     let tempArray=credit;
        //     tempArray.push(obj);
        //     setDebits([...tempArray]);
        //     alert(description+date+amount);
    
      return (
          <div>
              <Link to="/Home">Home</Link>
              <AccountBalance accountBalance={this.props.accountBalance}/>
            <h1>Credit</h1>
             
            <div>Username: {this.props.userName}</div>
            <div>Member Since: {this.props.memberSince}</div>
            <table>
               <tr>
                   <th>Description</th>
                   
                   <th>Amount</th>
                   <th>Date</th>
               </tr>
               {this.props.data.map((data)=>{
                   return(
                       <tr>
                           <td>
                               {data.description}
                           </td>
                           <td>
                               {data.amount}
                           </td>
                           <td>
                               {data.date}
                           </td>
                       </tr>
                   )

               }
               )}
           </table>
           {/* <form onSubmit={(e)=>submit(e)}> */}
           <form>
             <input onChange={this.addDescription} type="text" placeholder="description" name="description"></input>
             <input onChange={this.addAmount} type="date" placeholder="Date" ></input>
             <button onClick={this.saveContent}>Add Credit</button>
           </form>
          </div>
      );
    }
} 
  export default Credit;

