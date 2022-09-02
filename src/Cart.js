import React from "react"
import { photoContext } from "./Context"
import CartImage from "./CartImage"

export default function Cart(props){

    // methods and data passed from Context.js
    const {cart, addToCart, EmptyCart} = React.useContext(photoContext)

    // state that renders the text of the check out button
    const [checkout, setCheckout] = React.useState('Check Out')


    // function that is triggered when check out button is clicked
    // this is meant to imitate an actual buying process
    const changeCheckOut = () => {

        // moment button is clicked changes state of checkout
        // to the string Processing...
        setCheckout("Processing...")

        // After 2 seconds runs 3 functions
        // Emptys the cart through EmptyCart()
        // alerts user with a message
        // resets checkout state to "Check Out"
        setTimeout(() => {
            EmptyCart()
            alert("Your Order is Processed!")
            setCheckout("Check Out")
        }, 2000)
    }


    // when called it generates a number
    const total = () => {

        // checks to see if cart has item. If so it will multiple the number of items
        // with a hardset number 5.99 in this case and when returned the variable is converted to USD
        const results = cart.length > 0 ? cart.length * 5.99 : 0
        return results.toLocaleString("en-US", {style: "currency", currency: "USD"})
    }


    // goes through the cart state and renders elements using each items data.
    // created a CartImage component so that each image has its own hover state.
    const itemsInCart = cart.map(item => {
        return  <CartImage key={item.id} addToCart={addToCart} item={item}/>
    })

    return(
        <div>
            {itemsInCart}


            {/* checks if cart is empty when user switchs to this Cart page */}
            {cart.length > 0 ? 
            <div className="flexTotal">
                <button onClick={changeCheckOut}>{checkout}</button>
                <h3>Total: {total()}</h3>
            </div> :
            <h1>Empty Cart! Please return to homepage! (Click the text "Pick A Pic")</h1>
            }
            
            
        </div>
    )
}