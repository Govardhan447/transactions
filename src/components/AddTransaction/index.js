import {Component} from 'react'
import {IoIosSave} from 'react-icons/io'
import {IoClose} from 'react-icons/io5'

import './index.css'

class AddTransaction extends Component {
  state = {
    description: '',
    transactionDetails: [],
    inputAmount: 0,
    transactionType: 'credit',
  }

  onchangeInputAmount = event => {
    this.setState({inputAmount: event.target.value})
  }

  onchangeInputDescription = event => {
    this.setState({description: event.target.value})
  }

  onchangeTransactions = event => {
    this.setState({transactionType: event.target.value})
  }

  onsubmitForm = async () => {
    const {inputAmount, transactionType, description} = this.state

    const newList = {
      date: new Date(),
      description,
      transactionType,
      inputAmount,
    }

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(newList),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }

    this.setState(prevState => ({
      transactionDetails: [...prevState.transactionDetails, newList],
    }))
  }

  render() {
    const {inputAmount, transactionDetails} = this.state
    return (
      <form className="add-container" onSubmit={this.onsubmitForm}>
        <div className="transaction-type-container">
          <lable className="lable">Transaction Type</lable>
          <select
            className="select-container"
            onChange={this.onchangeTransactions}
          >
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </select>
        </div>
        <div className="transaction-type-container">
          <lable className="lable">Amount</lable>
          <input
            className="select-container"
            type="number"
            value={inputAmount}
            onChange={this.onchangeInputAmount}
          />
        </div>
        <div className="transaction-type-container">
          <lable className="lable">Description</lable>
          <textarea
            className="text-container"
            rows="4"
            cols="68"
            onChange={this.onchangeInputDescription}
          >
            {}
          </textarea>
        </div>
        <div className="button-container">
          <button type="submit" className="save-btn">
            <IoIosSave className="icon" />
            SAVE
          </button>
          <button
            type="button"
            className="close-btn"
            onClick={this.onclickClose}
          >
            <IoClose className="icon" />
            CANCEL
          </button>
        </div>
      </form>
    )
  }
}

export default AddTransaction
