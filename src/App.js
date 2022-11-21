import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './components/layout/container/Container';
import Footer from './components/layout/footer/Footer';
import NavBar from './components/layout/navbar/NavBar';
import Home from './components/pages/home/Home';
import NewUser from './components/pages/newUser/NewUser';
import Users from './components/pages/users/Users';

function App() {
  return (
    <Router>
      <NavBar/>
      <Container customClass="min-height">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/newUser" element={<NewUser/>}/>
        <Route path="/users" element={<Users/>}/>
      </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
