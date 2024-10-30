import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PriceOptyions from './components/PriceOptyions/PriceOptyions'
import LineChart from './components/LineChart/LineChart'
import PChart from './components/P-Chart/PChart'
import Phones from './components/Phones/Phones'


function App() {
  return (
    <>
      <Navbar></Navbar>
      <PriceOptyions></PriceOptyions>
      <LineChart></LineChart>
      <PChart></PChart>
      <Phones></Phones>
    </>
  )
}

export default App
