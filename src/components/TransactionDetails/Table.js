import {Link} from 'react-router-dom'
import './index.css'

const Table = props => {
  const {data} = props

  return (
    <table className="table-container">
      <thead>
        <tr>
          <th className="column">Office Transactions</th>
          <th className="column">{}</th>
          <th className="column">{}</th>
          <th className="column">{}</th>
          <Link to="/add-transaction">
            <th className="column">+Add Transactions</th>
          </Link>
        </tr>
        <tr>
          <th className="column">{}</th>
          <th className="column">Description</th>
          <th className="column">Credit</th>
          <th className="column">Debit</th>
          <th className="column">Balence</th>
        </tr>
      </thead>
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
    </table>
  )
}

export default Table
