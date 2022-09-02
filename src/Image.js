import React from "react"
import {photoContext} from './Context'

export default function Image(props){

    // grabs methods and data
    // toggleFav function here literally will change the Heart icon from filled to unfilled
    // while "favoriteToggle" checks to see if it is filled or not and does not change the actual 
    // isFavorite property
    const {toggleFav, addToCart, cart} = React.useContext(photoContext)


    // condition to check if user cursor is on image or not.
    const [isHovered, setIsHovered] = React.useState(false)


    // this function checks to see if the isFavorite property is true or false
    // if true it will render a heart icon that is filled, while if it is false
    // AND users cursor is on it(isHovered State is true) then it will render an 
    // unfilled heart
    const favoriteToggle = () => {
        if(props.fav){
            return <i className="fas fa-heart filled" onClick={() => toggleFav(props.id)}></i>
        } else if(isHovered){
            return <i className="fa fa-heart unfilled" onClick={() => toggleFav(props.id)}></i>
        }
    }


    // function which checks to see if item that triggers this is in the cart already.
    // if it is then render a blue colored plus, if item is not in cart AND
    // users cursor is on the item, renders a white plus.
    const addedToggle = (item) => {

        // checks the cart State for item
        const isItAdded = cart.find(picture => picture.id === item)

        // checks the array above this called "isItAdded"
        if(isItAdded){
            return <i className="fa fa-plus-circle plusFilled" onClick={() => addToCart(props.pic)}></i>
        } else if (isHovered) {
            return <i className="fa fa-plus-circle plusUnfilled" onClick={() => addToCart(props.pic)}></i>
        }
    }


    
    return(
        <div className="image" 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            
            {favoriteToggle()}
            <img src={props.img} alt="#"/>
            {addedToggle(props.id)}
        </div>
    )
}