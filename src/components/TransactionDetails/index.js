import {Component} from 'react'
import Table from './Table'

import './index.css'

const data = [{date: '', description: '', credit: '', debit: '', balence: ''}]

class TransactionDetails extends Component {
  state = {transactionDetails:""}

  componentDidMount(){
    this.getTransactionDetails()
  }
  
  getTransactionDetails = async() =>{
    const url = "https://todoapplication-m653.onrender.com"
    const response = await fetch(url)
    const data = await response.json()
    if (response.ok === true) {
      this.setState({transactionDetails:data})
    }

    
  }

  render() {
    const{transactionDetails}=this.state
    return (
      <div className="transaction-container">
        <h1 className="heading">Transaction Assignment</h1>
        <Table data={transactionDetails} />
      </div>
    )
  }
}

export default TransactionDetails
