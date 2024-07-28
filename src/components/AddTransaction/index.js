import {Component} from 'react'
import {IoIosSave} from 'react-icons/io'
import {IoClose} from 'react-icons/io5'

import './index.css'

class AddTransaction extends Component {
  state = {
    description: '',
    inputAmount: 0,
    credit:0,
    debit:0,
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

  onSubmitSuccess =() =>{
    const{history}=this.props
    history.replace("/")
  }

  onsubmitForm = async () => {
    const {inputAmount, transactionType, description} = this.state
    const amountType = transactionType==="credit"?
    this.setState({credit:inputAmount}):this.setState({debit:inputAmount})

    const newList = {
      date: new Date(),
      description,
      credit,
      debit,
    }

    const url = 'https://todoapplication-m653.onrender.com'
    const options = {
      method: 'POST',
      body: JSON.stringify(newList),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data)
    } else {
      this.onSubmitFailure(data)
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
