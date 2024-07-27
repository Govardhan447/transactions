import {Component} from 'react'

import './index.css'

class AddTransaction extends Component {
  state = {
    credit: 0,
    debit: 0,
    balence: 0,
    description: '',
    transactionDetail: '',
    inputAmount: '',
  }

  render() {
    const {inputAmount} = this.state
    return (
      <div className="add-container">
        <div className="transaction-type-container">
          <lable>Transaction Type</lable>
          <select>
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </select>
        </div>
        <div>
          <lable>Transaction Type</lable>
          <input type="number" value={inputAmount} />
        </div>
      </div>
    )
  }
}

export default AddTransaction
