import './App.css'
import CourseSection from './components/CourseSection'
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

    {/* course list */}
    <CourseSection/>

    </>
  )
}

export default App
