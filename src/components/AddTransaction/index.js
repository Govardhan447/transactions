import {Component} from 'react'
import {IoIosSave} from 'react-icons/io'
import {IoClose} from 'react-icons/io5'
import {v4 as uuidv4} from 'uuid'

import './index.css'

class AddTransaction extends Component {
  state = {
    description: '',
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

  onsubmitForm = async event => {
    event.preventDefault()
    const {inputAmount, transactionType, description} = this.state

    const newList = {
      id: uuidv4(),
      date: new Date(),
      description,
      inputAmount,
      transactionType,
    }

    console.log(newList)

    const url = 'https://todoapplication-m653.onrender.com'
    const options = {
      method: 'POST',
      body: JSON.stringify(newList),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    console.log(data)

    if (response.ok === true) {
      console.log('response Success')
    }
  }

  render() {
    const {inputAmount} = this.state
    return (
      <form className="add-container" onSubmit={this.onsubmitForm}>
        <div className="transaction-type-container">
          <label className="lable" htmlFor="type">
            Transaction Type
          </label>
          <select
            className="select-container"
            onChange={this.onchangeTransactions}
            id="type"
          >
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </select>
        </div>
        <div className="transaction-type-container">
          <label className="lable" htmlFor="amount">
            Amount
          </label>
          <input
            className="select-container"
            type="number"
            value={inputAmount}
            onChange={this.onchangeInputAmount}
            id="amount"
          />
        </div>
        <div className="transaction-type-container">
          <label className="lable" htmlFor="description">
            Description
          </label>
          <textarea
            className="text-container"
            rows="4"
            cols="55"
            onChange={this.onchangeInputDescription}
            id="description"
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
