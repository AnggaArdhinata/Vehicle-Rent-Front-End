import './App.css';
import NavigationBar from './components/Navigationbar';
import "./style/landingpage.css"
import Intro from './components/Intro'
import Popular from './components/Popular';
import Formselect from './components/Formselect'

function App() {
  return (
    <div>
      <NavigationBar/>
      <div className='myBG'>
     <Intro/>
     <Formselect/>
     </div>
     <Popular/>
    </div>
  )
}

export default App;
