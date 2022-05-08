
import './App.css';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import InventoryDetails from './pages/InventoryDetails/InventoryDetails';
import InventoryPage from './pages/InventoryPage/InventoryPage';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth'
import AddInventory from './pages/AddInventory/AddInventory';
import MyItem from './pages/MyItem/MyItem';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/inventory' element={<InventoryPage></InventoryPage>}></Route>
        <Route path='/inventory/:productId' element={
          <RequireAuth>
            <InventoryDetails></InventoryDetails>
          </RequireAuth>
        }></Route>
        <Route path='/addItem' element={<AddInventory></AddInventory>}></Route>
        <Route path='/myItem' element={<MyItem></MyItem>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
