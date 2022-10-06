/* React Router Dom */
import { 
  Routes,
  Route
} from "react-router-dom";

/* Components */
import Home from "./Components/Home/Home";
import Cardapio from "./Components/Cardapio/CArdapio";




const App = () => {
  return (
    <Routes>



      <Route 
        path="/" 
        element={  
          <Home />  
        }
      />

      <Route 
        path="Cardapio"
        element={
          <Cardapio />
        }
      />
    
    
    
    </Routes>
  );
}

export default App;
