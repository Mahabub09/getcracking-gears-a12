
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import RequireAuth from './Components/RequireAuth/RequiureAuth';

import AddTools from './Pages/AddTools/AddTools';
import AllTools from './Pages/AllTools/AllTools';
import Blogs from './Pages/Blogs/Blogs';
import DashBoard from './Pages/DashBoard/DashBoard';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Navbar from './Pages/Navbar/Navbar';
import NotFound from './Pages/NotFound/NotFound';
import Purchase from './Pages/Purchase/Purchase';
import MyOrders from './Pages/DashBoard/MyOrders';
import AddReview from './Pages/AddReview/AddReview';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/tool/:toolId' element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>}>
        </Route>
        {/* <Route path='/addReview' element={
          <RequireAuth>
            <AddReview></AddReview>

          </RequireAuth>}>
        </Route> */}
        <Route path='/addTools' element={<RequireAuth><AddTools></AddTools></RequireAuth>}></Route>

        <Route path="dashboard" element={<RequireAuth><DashBoard /></RequireAuth>} >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>

        </Route>

        <Route path='/allTools' element={<RequireAuth><AllTools></AllTools></RequireAuth>}></Route>

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>

        <Route path='/myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer></ToastContainer>

    </div>
  );
}

export default App;
