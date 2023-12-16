import './App.css'
import CourseSection from './components/CourseSection'
import Footer from './components/Footer'
import HeroPage from './components/HeroPage'
import NavBar from './components/NavBar'
import ProgressCard from './components/ProgressCard'
import Testimonials from './components/Testimonials'

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

    <Testimonials/>

    <Footer/>

    </>
  )
}

export default App
