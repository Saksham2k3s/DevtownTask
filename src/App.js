import "./App.css";
import Hooks from "./Components/Hooks/Hooks";
import ItemsPage from "./Components/layouts/ItemsPage";
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
     
      <Routes>
      
      <Route path="/" element={<ItemsPage/>}/>
      
      </Routes>
    </>
  );
}

export default App;
