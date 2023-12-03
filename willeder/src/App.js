
import Cards from './components/Cards/Cards';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Logo from './components/Logo/Logo';
import Nav from './components/Navbar/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Cards/>
      <Details/>
      <Logo/>
      <Footer/>
    </div>
  );
}

export default App;
