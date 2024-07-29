import {Component} from 'react'

import {IoClose} from 'react-icons/io5'
import Popup from 'reactjs-popup'

import Table from './Table'
import AddTransaction from '../AddTransaction'

import './index.css'

class TransactionDetails extends Component {
  state = {transactionDetails: []}

  componentDidMount() {
    this.getTransactionDetails()
  }

  getTransactionDetails = async () => {
    const url = 'https://todoapplication-wtf9.onrender.com/todos'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.setState({transactionDetails: data})
    }
  }

  render() {
    const {transactionDetails} = this.state
    console.log(transactionDetails)
    const closeBtn = <IoClose />
    return (
      <div className="transaction-container">
        <h1 className="heading">Transaction Assignment</h1>
        <table className="table-container">
          <thead>
            <tr>
              <th className="column">Office Transactions</th>
              <th className="column">{}</th>
              <th className="column">{}</th>
              <th className="column">{}</th>
              <th className="column">
                <Popup
                  modal
                  trigger={
                    <button type="button" className="trigger-button">
                      +Add Transactions
                    </button>
                  }
                >
                  {close => (
                    <div className="popup-contaienr">
                      <div className="header-contaienr">
                        <h1 className="new-header">New Transactions</h1>
                        <button
                          type="button"
                          className="trigger-button"
                          onClick={() => close()}
                        >
                          {closeBtn}
                        </button>
                      </div>

                      <AddTransaction />
                    </div>
                  )}
                </Popup>
              </th>
            </tr>
            <tr>
              <th className="column">{}</th>
              <th className="column">Description</th>
              <th className="column">Credit</th>
              <th className="column">Debit</th>
              <th className="column">Balence</th>
            </tr>
            <tbody>
              {transactionDetails.map(item => (
                <Table itemDetails={item} key={item.id} />
              ))}
            </tbody>
          </thead>
        </table>
      </div>
    )
  }
}

export default TransactionDetails
