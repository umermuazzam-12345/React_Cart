import "./App.css";    
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Cards from "./components/Cards";
import CardsDetails from './components/CardsDetails';

function App() {
  return (
    <> 
        <Header/>
        <Routes>
          <Route path="/" element={<Cards/>}/>
          <Route path="/cart/:id" element={<CardsDetails/>}/>
        </Routes>
    </>
  );
}

export default App;
