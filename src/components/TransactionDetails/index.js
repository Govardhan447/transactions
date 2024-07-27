import {Component} from 'react'
import Table from './Table'

import './index.css'

const data = [{date: '', description: '', credit: '', debit: '', balence: ''}]

class TransactionDetails extends Component {
  state = {
    credit: 0,
    debit: 0,
    balence: 0,
    description: '',
    transactionDetail: data,
  }

  render() {
    return (
      <div className="transaction-container">
        <h1 className="heading">Transaction Assignment</h1>
        <Table data={data} />
      </div>
    )
  }
}

export default TransactionDetails
