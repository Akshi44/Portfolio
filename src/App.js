import './App.css';
import HeadersComponent from './Components/HeadersComponents/HeadersComponent'; 
import AboutUs from './Components/BodyComponents/AboutUs';
import Project from './Components/BodyComponents/Project';
import Skill from './Components/BodyComponents/Skill';
import Footer from './Components/BodyComponents/Footer';
import Contact from './Components/BodyComponents/Contact';
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <HeadersComponent/>
      <AboutUs/>
      <Project/>
      <Skill/>
      <Contact/>
      <Footer/>

    </div>
    </BrowserRouter>
  );
}
export default App;
