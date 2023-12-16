import './App.css'
import CourseSection from './components/CourseSection'
import HeroPage from './components/HeroPage'
import NavBar from './components/NavBar'
import ProgressCard from './components/ProgressCard'

function App() {
  

  return (
    <>
    {/* navbar */}
        <NavBar/>

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
