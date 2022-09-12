import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Booking from './components/Booking/Booking';
import Review from './components/Review/Review';
import DashBoard from './components/Dashboard/DashBoard';
import FileNotFound from './components/FileNotFound/FileNotFound';
import Blogs from './components/Blogs/Blogs';


function App() {
  return (
    <div >

    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/booking' element={<Booking></Booking>}
      ></Route>
      <Route path='/review' element={<Review></Review>}></Route>
      <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='*' element={<FileNotFound></FileNotFound>}></Route>

    </Routes>

    </div>
  );
}

export default App;
