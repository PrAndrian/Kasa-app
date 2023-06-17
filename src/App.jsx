import { 
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  Outlet, 
  RouterProvider, 
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import Error404 from "./pages/Error404"
import Accomodation from "./pages/Accomodation"
import NavBar from "./components/global/NavBar";
import Footer from "./components/global/Footer";
import { dataLoaderAccomodation } from "./utils/dataLoaderAccomodation";
import { dataLoaderAbout } from "./utils/dataLoaderAbout";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route 
          index 
          element={<Home/>} 
          loader={dataLoaderAccomodation}
          errorElement={<Error404 />}/>
        <Route 
          path="/fiche-logement/:logementId" 
          element={<Accomodation/>} 
          loader={dataLoaderAccomodation}
          errorElement={<Error404 />}
        />
        <Route 
          path="/a-propos" 
          element={<About/>}
          loader={dataLoaderAbout}
          errorElement={<Error404 />}
        />
        <Route path="*" element={<Error404/>}/>  
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  );
}

const Root = () => {
  return (
    <>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App;
