import React from "react"
import { photoContext } from "./Context"
import Image from "./Image"
export default function HomePage(props){

    // grabs data/methods from Context.js
    const {allPhotos} = React.useContext(photoContext)
    
    // pass data from allPhotos state into a new array with elements
    const homePhotos = allPhotos.map(pic => {
        return <Image key={pic.id} img={pic.url} id={pic.id} fav={pic.isFavorite} pic={pic}/>
    })

    // react automatically renders/reads js code which is in curlys down below.
    return(
        <div className="gridEl">
            {homePhotos}
        </div>
    )
}