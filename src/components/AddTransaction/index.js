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

  onSubmitForm = async event => {
    event.preventDefault()
    const {inputAmount, transactionType, description} = this.state

    const credit = transactionType === 'credit' ? inputAmount : 0
    const debit = transactionType === 'debit' ? inputAmount : 0

    const formattedDate = new Date().toLocaleDateString()

    let balance = 0
    if (transactionType === 'credit') {
      balance += parseInt(inputAmount)
    } else if (transactionType === 'debit') {
      balance -= parseInt(inputAmount)
    }

    const newList = {
      id: uuidv4(),
      date: formattedDate,
      description,
      credit,
      debit,
      balance,
    }

    const url = 'https://todoapplication-wtf9.onrender.com/todos'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newList),
    }

    try {
      const response = await fetch(url, options)
      const data = await response.json()

      if (response.ok) {
        console.log('Response Success')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  render() {
    const {inputAmount} = this.state
    return (
      <form className="add-container" onSubmit={this.onSubmitForm}>
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
            cols="45"
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
