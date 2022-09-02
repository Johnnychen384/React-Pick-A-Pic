import React from "react"



export default function CartImage(props){

    // checks if user cursor is on item
    const [hovered, setHovered] = React.useState(false)

    return (
        <div className="flexCol">
                    
            <div 
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >

                {/* renders a trash icon which is either white or blue depending on if user is hovering over it
                    if it is hovered over and clicked the addToCart function will trigger. addToCart not only "adds item to cart"
                    but it also removes items from carts if it is already inside and this function runs.
                */}

                {hovered ? <i className="fa fa-trash trashfocused" onClick={() => props.addToCart(props.item)}></i> : <i className="fa fa-trash trashunfocused" ></i>}
                <div className="flexCart">
                    <img src={props.item.url} alt="#"/>
                    <p>$ 5.99</p>
                </div>
                
            </div>
        
        </div>
    )
}