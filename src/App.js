import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'

import './App.css'

const App = () => (
  <>
    <Home />
    <Switch>
      <Route exact path="/team-matches/RCB" />
    </Switch>
  </>
)

export default App
