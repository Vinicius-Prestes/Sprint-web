import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './css/GlobalStyle'
import Navbar from "./components/Nav"
import Footer from './components/Footer'


function App() {


  return (
    <Router>
      <GlobalStyle>
      <Navbar/>

      </GlobalStyle>
      
    </Router>
  )
}

export default App
