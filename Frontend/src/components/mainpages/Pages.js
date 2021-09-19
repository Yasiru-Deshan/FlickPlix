//rfce
import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Trailers from './trailers/Trailers'
import DetailTrailer from './detailTrailer/DetailTrailer'
import Login from './auth/Login'
import Register from './auth/Register'
import Favourite from './favourite/Favourite'
import NotFound from './utils/not_found/NotFound'



function Pages() {
    return (
       <Switch>
           <Route path="/" exact component={Trailers} />
           <Route path="/detail/:id" exact component={DetailTrailer} />
        <Route path="/login" exact component= {Login}/>
           <Route path="/register" exact component= {Register} />
           <Route path="/favourite" exact component={Favourite} />
            <Route path="*" exact component={NotFound} />
       </Switch>
    )
}

export default Pages
