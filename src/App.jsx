import './css/App.css'
import { Banner } from './components/Banner'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import Introduction from './components/Introduction'
import Navbar from './components/Navbar'
import { Projects } from './components/Projects'
import Resume from './components/Resume'
import { Skills } from './components/Skills'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <Introduction />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
