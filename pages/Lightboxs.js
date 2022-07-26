import React from 'react';
import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";
import Use1  from '../images/use1.jpg';

function Lightboxs() {

    let images = [
        {
            url:"image_url1",
            title:"image title 1"
        },
        {
            url:"image_url2",
            title:"image title 2"
        }
    ];



    return (
        <div>
            
{/* for single images */}
<Lightbox image={Use1} title="Image Title"/>
{/* mutiple images */}


{/* <Lightbox images={images} /> */}

        </div>
    )
}

export default Lightboxs
