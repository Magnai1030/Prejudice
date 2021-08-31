import { Switch, Route } from "react-router-dom"

// import the Home.tsx component
import Home from "../pages/Home"

function Routes (){
   return(
     <Switch>
        <Route path="/" exact component={Home}></Route>
     </Switch>
  )
}

export default Routes