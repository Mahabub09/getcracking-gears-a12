
import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequireAuth from './Components/RequireAuth/RequiureAuth';
import AddReview from './Pages/AddReview/AddReview';
import AddTools from './Pages/AddTools/AddTools';
import AllTools from './Pages/AllTools/AllTools';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Navbar from './Pages/Navbar/Navbar';
import Purchase from './Pages/Purchase/Purchase';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/tool/:toolId' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path='/addReview' element={<RequireAuth><AddReview></AddReview></RequireAuth>}></Route>
        <Route path='/addTools' element={<RequireAuth><AddTools></AddTools></RequireAuth>}></Route>
        <Route path='/allTools' element={<RequireAuth><AllTools></AllTools></RequireAuth>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
