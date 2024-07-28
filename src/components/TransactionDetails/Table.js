import {IoClose} from 'react-icons/io5'
import Popup from 'reactjs-popup'
import AddTransaction from '../AddTransaction'

import './index.css'

const Table = props => {
  const {data} = props
  const closeBtn = <IoClose />
  return (
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
                  <div className="transaction-type-container">
                    <AddTransaction />
                  </div>
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
      </thead>
    </table>
  )
}

export default Table

/*
 <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td className="column">{item.date}</td>
            <td className="column">{item.description}</td>
            <td className="column">{item.credit}</td>
            <td className="column">{item.debit}</td>
            <td className="column">{item.balence}</td>
          </tr>
        ))}
      </tbody>
*/
