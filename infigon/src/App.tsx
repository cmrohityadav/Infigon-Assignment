import './App.css'
import HeroPage from './components/HeroPage'
import Navbar from './components/Navbar'
import ProgressCard from './components/ProgressCard'

function App() {
  

  return (
    <>
    {/* navbar */}
        <Navbar/>

    {/* carousel */}
    <HeroPage/>

    {/* progress items */}
    <ProgressCard/>

    </>
  )
}

export default App
