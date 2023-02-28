import React from "react";
import {Avatar} from 'flowbite-react'
import Image from "next/image";

export default function ProfileImage(props: any) {

    const link = props?.url ?? "https://i.pinimg.com/originals/bf/3a/fd/bf3afd9576212371897e10694c078855.jpg";
    return (
        <Image className="mt-2 border-4 rounded-full w-20 h-20  md:w-36 md:h-36" width={100}
               height={100} src={link} alt={"alt"}/>
    );
}