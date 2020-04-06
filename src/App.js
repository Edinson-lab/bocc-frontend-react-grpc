import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';

const {SalaryLoanServiceClient} = require('./Service_grpc_web_pb');
const {SalaryLoan, SalaryLoanList} = require('./Service_pb.js');

var client = new SalaryLoanServiceClient('http://a4584de2672f211eab8490692fb939fa-1990182039.us-east-2.elb.amazonaws.com:9090', null, null);

class App extends Component{  

  state = {
    users: [],
    clientId: '',
    acoNumber: '',
    amount : '',
    term: '',
    loanId: '',
    validThru: '',
    creationDate: '',
  }
  callGrpcService = () => {
    const salaryloan = new SalaryLoanList();
    // salaryloan

    client.findAll(salaryloan, {}, (err, response) => {
      if (response == null) {
        console.log(err);
      }else {
        this.setState({
          users: response.array[0]
        })        
        // console.log(requestSalaryLoan);    
        console.log(this.state.users);    
      }
    });
  }

  handleChange = (event) => {
    const { target: { name, value } } = event
    this.setState({ [name]: value })
  }  

  callGrpcServiceRequest = event => {
    event.preventDefault();

    const user = {
      clientId: this.state.clientId,
      acoNumber: this.state.acoNumber,
      amount: this.state.amount,
      term: this.state.term,
      loanId: this.state.loanId,
      validThru: this.state.validThru,
      creationDate: this.state.creationDate
    };    

    const salaryloan = new SalaryLoan();
    console.log(salaryloan);
    // salaryloan.setSalaryloanList(user);
    salaryloan.setClientid(user.clientId); 
    salaryloan.setAconumber(user.acoNumber); 
    salaryloan.setAmount(user.amount); 
    salaryloan.setTerm(user.term); 
    salaryloan.setLoanid(user.loanId); 
    salaryloan.setValidthru(); 
    //salaryloan.setCreationdate(user.creationDate);

    client.create(salaryloan, {}, (err, response) => {
      if (response == null) {
        console.log(err);
      }else{
        console.log("Resigtro exitoso"); 
      }
      
    });  

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>
            <img src={logo} className="App-logo" alt="logo" />
            Users
          </h1>
            <DataTable value={this.state.users}>
              <Column header="clientId" field="0" />
              <Column header="acoNumber" field="1"/>
              <Column header="amount" field="2" />
              <Column header="term" field="3" />
              <Column header="loanId" field="4" />
              <Column header="validThru" field="5" />
              <Column header="creationDate" field="6.0" />
            </DataTable>              
          <button style={{padding:10}} onClick={this.callGrpcService}>Click for grpc request</button>

          <form onSubmit={this.callGrpcServiceRequest}>
            <InputText placeholder="clientId" type="text" className="input" name="clientId" onChange={this.handleChange} value={this.state.clientId}/>
            <InputText placeholder="acoNumber" type="text" className="input" name="acoNumber" onChange={this.handleChange} value={this.state.acoNumber}/>
            <InputText placeholder="amount" type="text" className="input" name="amount" onChange={this.handleChange} value={this.state.amount}/>
            <InputText placeholder="term" type="text" className="input" name="term" onChange={this.handleChange} value={this.state.term} />
            <InputText placeholder="loanId" type="text" className="input" name="loanId" onChange={this.handleChange} value={this.state.loanId}/>
            <InputText placeholder="validThru" type="text" className="input" name="validThru" onChange={this.handleChange} value={this.state.validThru}/>          
            <br/>
            <button label="Add" variant="neutral" className="rainbow-m-around_medium" type="submit">Add User</button>
            </form>          

        </header>
      </div>
    );
  }  
}

export default App;
