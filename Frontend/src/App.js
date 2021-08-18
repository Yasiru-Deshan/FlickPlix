import './App.css'; 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages';
import Movie from './pages/movie/movie';
import Watch from './pages/movie/watch.js';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Footer from './components/Footer';

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
    
      </Switch>
      
	  
	  
    
    <Footer/>
	</Router>
  );
}

export default App;