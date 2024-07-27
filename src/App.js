import {Switch, Route} from 'react-router-dom'
import TransactionDetails from './components/TransactionDetails'
import AddTransaction from './components/AddTransaction'

import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={TransactionDetails} />
    <Route exact path="/add-transaction" component={AddTransaction} />
  </Switch>
)

export default App
