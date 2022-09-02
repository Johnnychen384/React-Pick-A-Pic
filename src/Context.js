import React from "react"

// Allows us to pass data around without using props
const photoContext = React.createContext()

export default function Context(props){

    const [allPhotos, setAllPhotos] = React.useState([])

    // checks to make sure this render isnt the first render
    // to prevent getData() from rerunning 
    const [firstLoad, setFirstLoad] = React.useState(true)

    const [cart, setCart] = React.useState([])
    
    React.useEffect(() => {

        // function to grab data from api and set it to allPhotos state depending on condition
        async function getData() {
            const res = await fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            const data = await res.json()
            setAllPhotos(() => {
                if(JSON.parse(localStorage.getItem("allPhotos"))){
                    return JSON.parse(localStorage.getItem("allPhotos"))
                } else {
                    return data
                }
                
            })

            // on the first render setCart state to an array depending on if localstorage is empty
            setCart(() => {
                if(JSON.parse(localStorage.getItem("cart"))){
                    return JSON.parse(localStorage.getItem("cart"))
                } else {
                    return []
                }
            })

            // state to prevent fetching a whole new set of data which prevents the localstorage from saving properly
            setFirstLoad(false)
        }

   

        // checks to see if its the first render
        if(firstLoad){
            getData()

            // if  not first render, grab data from localstorage
        } else {
            localStorage.setItem("cart", JSON.stringify(cart))
            localStorage.setItem("allPhotos", JSON.stringify(allPhotos))
        }
        
        
        

        // states to watch to rerender
    }, [cart, allPhotos])


    // function which is used to toggle the heart which lets user know
    // if picture is their favorite
    const toggleFav = (id) => {
        setAllPhotos(prevState => {
            return prevState.map(item => {
                if(item.id === id){
                    return {
                        ...item,
                        isFavorite: !item.isFavorite
                    }
                } else {
                    return item
                }
            })
        })
    }



    // function which adds items and removes items from/to cart
    const addToCart = (item) => {

        // checks to see if the item passed in that triggers this function
        // is already in the cart state
        const isInCart = cart.find(pic => pic.id === item.id)
        
        // if it is in cart
        if(isInCart){

            setCart(prevState => {
                return prevState.filter(pic => pic.id !== item.id)
            })
            
        } else {

            // if it isnt in cart
            setCart(prevState => {
                return [
                    ...prevState,
                    item
                ]
            })
        }
    }

    // Emptys cart state. Will be used for "Check out button"
    const EmptyCart = () => {
        setCart([])
    }



    return (
        <photoContext.Provider value={{allPhotos, cart, toggleFav, addToCart, EmptyCart}}>
            {props.children}
        </photoContext.Provider>
    )
}

export {Context, photoContext}