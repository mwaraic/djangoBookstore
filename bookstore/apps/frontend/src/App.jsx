import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './components/Auth/Login'
import Dashboard from './components/Dashboard/Dashboard'
import Open from './components/Open/Open'

const App = () => {
  

  return (
    <div className="App">
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route exact path="/login/" component={Login} />
          <Route exact path="/:name/" component={Open} />
        </Switch>
    </div>
  );
}


export default App;
