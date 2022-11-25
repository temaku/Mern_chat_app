import {Button} from "@chakra-ui/react"
import './App.css';
import HomePage from "./pages/HomePage"
import {BrowserRouter as Router,Routes,Route } from "react-router-dom"
import ChatPage from "./pages/ChatPage"





function App() {

  return (
    <div className="App">
      <Router>
      <Routes>
     <Route path="/" element={<HomePage/>} exact />
    
     </Routes>
     </Router>
    
    </div>
  );
}

export default App;
