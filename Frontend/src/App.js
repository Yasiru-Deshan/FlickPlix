import React from 'react';
import './App.css'; 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import Home from './pages/home/index';
import Movie from './pages/movie/movie';
import Watch from './pages/movie/watch.js';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Footer from './components/Footer';
import './components/Footer/FooterElements'
import Favorites from './pages/favorites/favorites';

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


import Products from './components/mainpages/products/Products';
import Browse from './pages/Browse/Browse';

import AdminRoutes from './../src/pages/adminpages/AdminRoutes'


const App = ()=> {
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
        <Route path='/movie' component={Movie} exact/>
        <Route path='/watch' component={Watch} exact/>
        <Route path='/favorites' component={Favorites} exact/>
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

      <Route path='/products' component={Products}/>
      <AdminRoutes/>
      </Switch>
      
	  
	  
    
    <Footer/>
	</Router>
  );
}

export default App;