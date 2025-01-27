import TestComponent from './TestComponent'
import Header from "./page layout/header/header.jsx"
import Body from "./page layout/body/body.jsx"
import Footer from './page layout/footer/footer.jsx'
import Counter from './page layout/counter/counter.jsx'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

  return (
    <>
      {/* <Router>
        <Switch>
            <Route path="./page layout/header/header.jsx">
              <Header />
            </Route>
        </Switch>
      </Router> */}
      {/* <TestComponent /> */}
      <Header />
      <Body />
      <Footer />
      <Counter />
    </>
  )
}

export default App