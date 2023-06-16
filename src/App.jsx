import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import Error404 from "./pages/Error404"
import Accomodation from "./pages/Accomodation"

function App() {
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/fiche-logement/:logementId" element={<Accomodation/>}/>
      <Route path="/a-propos" element={<About/>}/>
      <Route path="/*" element={<Error404/>}/>
    </Routes>
  );
}

export default App;
