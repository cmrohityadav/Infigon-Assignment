
import ProgressItem from './ProgressItem'

function ProgressCard() {
    
  return (
    <>
  
    <div className='flex justify-around'>
        <ProgressItem count="500+" discription="School & College partners"/>
        <ProgressItem count="50,000+" discription="Students Mentored"/>
        <ProgressItem count="80+" discription="Industry Expert mentors"/>
        
    </div>
    
    </>
  )
}

export default ProgressCard