import { 
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider, 
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import Error404 from "./pages/Error404"
import Accomodation from "./pages/Accomodation"
import BaseLayout from "./components/global/BaseLayout";
import { dataLoaderAbout } from "./utils/dataLoaderAbout";
import { dataLoaderAccomodation } from "./utils/dataLoaderAccomodation";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<BaseLayout/>}>
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

export default App;
