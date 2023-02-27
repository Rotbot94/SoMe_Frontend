import React from "react";

export default function ProfileImage(props: any) {

    const link = props?.url ?? "https://i.pinimg.com/originals/bf/3a/fd/bf3afd9576212371897e10694c078855.jpg";
    return (
        <div className="m-2 rounded-full h-[10vh] w-[10vw]">
            <img className="rounded-full" src={link}/>
        </div>
    );
}