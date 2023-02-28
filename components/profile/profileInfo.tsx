import {User} from "@/interfaces";
import ProfileImage from "@/components/profileImage";
import React from "react";
import ProfileDescription from "@/components/profile/profileDescription";

export default function ProfileInfo(props: any) {

    const user: User = props?.user ?? undefined;

    return (

        <div>
            <div className="mt-5 w-[300px] md:w-[600px] h-[200px] md:h-[250px] flex flex-col items-center rounded border-4">
                <ProfileImage url={'https://i.pinimg.com/originals/bf/3a/fd/bf3afd9576212371897e10694c078855.jpg'}/>
                <ProfileDescription description={`Hi, I'm ${user?.first_name}`} createdAt={user?.createdAt}/>
            </div>
        </div>
    );
}