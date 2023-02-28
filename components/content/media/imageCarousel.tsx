
import React from "react";
import Image from "next/image";
import PhotoAlbum from "react-photo-album";

export default function ImageCarousel(props: any) {


    const images = props.images ?? [
        {
            src: 'https://sportshub.cbsistatic.com/i/2021/03/18/b730cb44-18e2-4226-958e-566761612e6b/eva-unit-1-1210355.jpg',
            alt: 'text'
        },
    ];

    if (!images) {
        return (<></>)
    } else {
        return (<>
            <PhotoAlbum layout="rows" photos={images}/>
        </>)

    }

}