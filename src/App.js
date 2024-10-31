import { Outlet, Route, Routes } from 'react-router';
import './App.css';
import NavBar from './componenets/NavBar';
import SideBar from './componenets/SideBar';
import Home from './componenets/Home';
import Products from './componenets/Products';
import AddProduct from './componenets/AddProduct';
import ProductsDetails from './componenets/ProductsDetails';
import EditProduct from './componenets/EditProduct';
import Categories from './componenets/Categories';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='row'>
        <div className='col-2 sidebar'>
          <SideBar/>
        </div>
        <div className='col-10'>
          <Routes>
            <Route path='/' element ={<Home />}></Route>
            <Route path='products' element ={<><Outlet /></>}>
              <Route path='' element ={<Products />} />
              <Route path='add' element ={<AddProduct />} />
              <Route path=':productID' element ={<ProductsDetails />}/>
              <Route path='Edit' element ={<EditProduct />}/>
            </Route>
            <Route path='categories' element ={<Categories />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
