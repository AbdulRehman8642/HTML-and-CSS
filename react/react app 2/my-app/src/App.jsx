import TestComponent from './TestComponent'
import Header from "./page layout/header/header.jsx"
import Body from "./page layout/body/body.jsx"
import Footer from './page layout/footer/footer.jsx'
import Counter from './page layout/counter/counter.jsx'
import Chatbot from './chatbot component/Chatbot.jsx'
import Timer from './page layout/timer + stopwatch/Timer.jsx'
import { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  // const [mount, setMount] = useState(false)
  // const onToggle = () => {
  //   setMount(!mount)
  // }

  const [mount, setMount] = useState(false)
  const onToggle = () => {
    setMount(!mount)
  }
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
      {/* <Header />
      <Body />
      <Footer />
      <Counter /> */}

    {/* <button onClick={onToggle}>
      toggle mount
    </button>
      {
        mount &&
      <Header />
      } */}
      {/* <Chatbot /> */}
      
      
      <Timer/>
    </>
  )
}

export default App