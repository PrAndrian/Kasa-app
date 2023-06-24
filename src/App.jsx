import {
  Route,
  Routes,
} from 'react-router-dom';
import NavBar from './components/global/NavBar'
import Footer from './components/global/Footer'
import Home from './pages/Home'
import Accomodation from './pages/Accomodation'
import About from './pages/About'
import Error404 from './pages/Error404'

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route
          path="/fiche-logement/:logementId"
          element={<Accomodation />}
        />
        <Route
          path="/a-propos"
          element={<About />}
        />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App;