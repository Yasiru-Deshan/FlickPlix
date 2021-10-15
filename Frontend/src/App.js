
import './App.css'; 
import './globalIndex.css'
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

//ADVERTISEMENT

import {DataProvider} from './GlobalState';
import Header from './components/headers/Header';
import MainPages from './components/mainpages/Pages';


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
import Browsemimi from './components/mainpages/Report/reportm';





const App = ()=> {

 

  const [isOpen, setIsOpen] = useState(false)

    const toggle = ()=>{
        setIsOpen(!isOpen)
    }
  return (

   <DataProvider>
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>    
      <Switch>
     
        <Route path='/' component={Home} exact/>
        <Route path='/movie/:id' component={Movie} exact/>
        <Route path='/watch/:id' component={Watch} exact/>
        <Route exact path='/favorites' component={Favorites}/>
        <Route path='/browse' component={Browse} exact/>
        <Route path='/browsemimi' component={Browsemimi} exact/>

      {/*Customers */}
      <Route exact path="/customers" component = {CustomerTable} ></Route>
      <Route path="/customer/add" component = {AddCustomer} exact></Route>
	    <Route path="/updateCustomer/:id" component = {UpdateCustomer} exact></Route>
      <PublicRoute path="/customer/login" component = {CustomerLogin} exact></PublicRoute>
      <PublicRoute path="/customer/register" component = {CustomerRegister} exact></PublicRoute>
      <PrivateRoute path="/customer/profile" component = {CustomerUserProfile} exact></PrivateRoute>
      <PrivateRoute path="/customer/profile/password-reset" component = {CustomerPasswordReset} exact></PrivateRoute>

      {/*Contact Page */}
      <Route path="/contact" component={Contact}/>
      <Route path="/admin/viewmsg" component={ContactTable}/>
       <AdminRoutes/>

      {/*advertisement*/}
      
    
   {/*

            {/* <Route path="/trailers" exact component={Trailers} />
           <Route path="/detail/:id" exact component={DetailTrailer} />
        
        <Route path="/login" exact component= {isLogged ? NotFound :Login }/>
           <Route path="/register" exact component= {isLogged ? NotFound : Register} />
          
           <Route path="/category" exact component= {isArtist ? Categories : NotFound} />
           <Route path="/create_trailer" exact component= {isArtist ? CreateTrailer : NotFound} />
           <Route path="/edit_trailer/:id" exact component= {isArtist ? CreateTrailer : NotFound} />
          
           <Route path="/history" exact component= {isLogged ? OrderHistory : NotFound} />
           <Route path="/history/:id" exact component= {isLogged ? OrderDetails : NotFound} />
          
           <Route path="/favourite" exact component={Favourite} />
            <Route path="*" exact component={NotFound} /> */}
         
        
     <div className="mimiApp">
      <Header />
      <MainPages />
     </div>
  
   
  </Switch>
      <Footer/>
	</Router>
 </DataProvider>
 
  );
}

export default App;