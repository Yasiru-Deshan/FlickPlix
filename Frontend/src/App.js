import React, {useContext} from 'react';
import './App.css'; 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {DataProvider} from './GlobalState'




import Home from './pages/home/index';
import Movie from './pages/movie/movie';
import Watch from './pages/movie/watch.js';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Footer from './components/Footer';
import './components/Footer/FooterElements'
import Favorites from './pages/favorites/favorites';

//ADVERTISEMENT

import Trailers from './components/mainpages/trailers/Trailers'
import DetailTrailer from './components/mainpages/detailTrailer/DetailTrailer'
import Login from './components/mainpages/auth/Login'
import Register from './components/mainpages/auth/Register'
import OrderHistory from './components/mainpages/history/OrderHistory'
import OrderDetails from './components/mainpages/history/OrderDetails'
import Favourite from './components/mainpages/favourite/Favourite'

import NotFound from './components/mainpages/utils/not_found/NotFound'
import Categories from './components/mainpages/categories/Categories'
import CreateTrailer from './components/mainpages/createTrailer/CreateTrailer'
import {GlobalState} from './GlobalState'

//customers
import CustomerTable from './components/customerTable/customerTable';
import AddCustomer from './components/addCustomer/addCustomer';
import UpdateCustomer from './components/updateCustomer/updateCustomer';
import CustomerLogin from './components/customerLogin/customerLogin';
import CustomerRegister from './components/customerRegister/customerRegister';
import CustomerUserProfile from './components/customerUserProfile/customerUserProfile';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import PublicRoute from './components/publicRoute/PublicRoute';
import CustomerPasswordReset from './components/customerPasswordReset/customerPasswordReset';

//Contact Page
import Contact from './components/ContactPage/ContactPage';
import ContactTable from './components/ContactTable/ContactTable';



import Browse from './pages/Browse/Browse';


import AdminRoutes from './../src/pages/adminpages/AdminRoutes'



const App = ()=> {

  const state = useContext(GlobalState)
   const [isLogged] =state.userAPI.isLogged
   const [isArtist]= state.userAPI.isArtist

  const [isOpen, setIsOpen] = useState(false)

    const toggle = ()=>{
        setIsOpen(!isOpen)
    }
  return (

    
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>    
      <Switch>
     
        <Route path='/' component={Home} exact/>
        <Route path='/movie/:id' component={Movie} exact/>
        <Route path='/watch' component={Watch} exact/>
        <Route exact path='/favorites' component={Favorites}/>
        <Route path='/browse' component={Browse} exact/>

      {/*Customers */}
      <Route exact path="/customers" component = {CustomerTable} exact></Route>
      <Route path="/customer/add" component = {AddCustomer} exact></Route>
	    <Route path="/updateCustomer/:id" component = {UpdateCustomer} exact></Route>
      <PublicRoute path="/customer/login" component = {CustomerLogin} exact></PublicRoute>
      <PublicRoute path="/customer/register" component = {CustomerRegister} exact></PublicRoute>
      <PrivateRoute path="/customer/profile" component = {CustomerUserProfile} exact></PrivateRoute>
      <PrivateRoute path="/customer/profile/password-reset" component = {CustomerPasswordReset} exact></PrivateRoute>

      {/*Contact Page */}
      <Route path="/contact" component={Contact}/>
      <Route path="/admin/viewmsg" component={ContactTable}/>


      {/*advertisement*/}
      <DataProvider>
    
    <div className="App">
   
            <Route path="/" exact component={Trailers} />
           <Route path="/detail/:id" exact component={DetailTrailer} />
        
        <Route path="/login" exact component= {isLogged ? NotFound :Login }/>
           <Route path="/register" exact component= {isLogged ? NotFound : Register} />
          
           <Route path="/category" exact component= {isArtist ? Categories : NotFound} />
           <Route path="/create_trailer" exact component= {isArtist ? CreateTrailer : NotFound} />
           <Route path="/edit_trailer/:id" exact component= {isArtist ? CreateTrailer : NotFound} />
          
           <Route path="/history" exact component= {isLogged ? OrderHistory : NotFound} />
           <Route path="/history/:id" exact component= {isLogged ? OrderDetails : NotFound} />
          
           <Route path="/favourite" exact component={Favourite} />
            <Route path="*" exact component={NotFound} />
         
            </div>
          
            </DataProvider>
   
      </Switch>

      <Route path='/products' component={Products}/>
      <AdminRoutes/>
</Switch>

      
	  
	  
    
    <Footer/>
	</Router>
  );
}

export default App;