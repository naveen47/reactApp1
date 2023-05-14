import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import { Link, Route, Routes } from "react-router-dom";
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Admin from './components/Admin'
import UserLogin from './components/UserLogin';
import ManageUser from './components/ManageUser';

function App() {
  return (
    <div className="App">
    <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxs"
    >
    <div>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/admin" element={<Admin />} />
    <Route path="/manageUser" element={<ManageUser />} />
    <Route path="/userLogin" element={<UserLogin />} />
      </Routes>
    </div>
   </ThemeProvider>
  
   

    </div>
  );
}

export default App;
