import React from "react"
import {Link} from "react-router-dom"
import "./App.css"
import { photoContext } from "./Context"

export default function Nav(props){

    // grabs data from Context.js's provider value
    const {cart} = React.useContext(photoContext)

    // checks if cart is empty or not. Depending on if it is or not, this will pass different cart icons
    const cartHasItem = cart.length > 0 ? <i aria-hidden={false} className="fa fa-shopping-cart FilledCart"></i> : <i aria-hidden={false} className="fa fa-shopping-cart unfilledCart"></i>

    // Links below are equal to "a" tags
    // even in css we can still refer the "Link" by using "a"
    // Links changes the actual url we are on
    return(
        <nav className="navbar">
            <h1><Link style={{textDecoration: 'None'}} to="/React-Pick-A-Pic" >Pick A Pic</Link></h1>
            <div className="flex">
                <Link to="/React-Pick-A-Pic/cart">{cartHasItem}</Link>
            </div>
        </nav>
    )
    
}


