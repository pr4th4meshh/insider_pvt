import './App.css'
import Categories from './components/Categories'
import Navbar from './components/Navbar'
import Featured from './components/Featured'
import Genre from './components/Genre'
import Workshop from './components/Workshop'
import Courses from './components/Courses'
import Theatre from './components/Theatre'
import Health from './components/Health'
import Games from './components/Games'
import ThisWeek from './components/ThisWeek'
import Magazine from './components/Magazine'
import Artist from './components/Artist'
import Newsletter from './components/Newsletter'
import Install from './components/Install'
import FooterHero from './components/FooterHero'
import Footer from './components/Footer'

function App() {
  return (
    <div >
   <Navbar/>
   <Categories/>
   <Featured/>
   <Genre/>
   <Workshop/>
   <Courses/>
   <Theatre/>
   <Health/>
   <Games/>
   <ThisWeek/>
   <Magazine/>
   <Artist/>
   <Newsletter/>
   <Install/>
   <FooterHero/>
   <Footer/>
    </div>
  )
}

export default App
