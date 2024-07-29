import './index.css'

const Table = props => {
  const {itemDetails} = props
  const {date, description, credit, debit, balance} = itemDetails
  const formattedDate = new Date(date).toLocaleDateString()

  return (
    <tr>
      <td className="column">{formattedDate}</td>
      <td className="column">{description}</td>
      <td className="column">{credit}</td>
      <td className="column">{debit}</td>
      <td className="column">{balance}</td>
    </tr>
  )
}

export default Table
