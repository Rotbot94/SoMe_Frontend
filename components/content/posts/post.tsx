import {Button, Card} from 'flowbite-react'
import {Post as PostInterface} from "@/interfaces";
import Image from "next/image";
import React, {useState} from "react";
import Comment from "@/components/content/comment/comment";

export default function Post(props: any) {

    const [show, setShow] = useState(false);

    const post: PostInterface = props.post ?? null;

    const getUserFromPost = () => {
        return 'User';
    }

    const toggleComments = () => {
        setShow(!show);
    }

    if (!post) {
        return (<>Post is invalid</>);

    } else {
        const user = getUserFromPost();
        const createdAt = post.createdAt ?? 'Time is a construct, fool';
        const content = post.content ?? [];
        const interactions = post.interactions ?? '';
        const comments = post.comments ?? [];

        return (
            <Card className="w-9/12">
                <div className="flex flex-row">
                    <Image className="mt-2 mr-1 border-4 rounded-full w-10 h-10" width={100}
                           height={100}
                           src={"https://i.pinimg.com/originals/bf/3a/fd/bf3afd9576212371897e10694c078855.jpg"}
                           alt={"alt"}/>
                    <p className="mt-4 font-medium">{user}</p>
                </div>
                <div className="mt-1">@{createdAt}</div>
                <div className="border-b-2 pb-2">{content}</div>
                <span className="shadow w-1/12">{interactions}</span>
                <div className="flex flex-col items-center">
                    <Button className={`mt-2 !min-w-full`}
                            onClick={() => toggleComments()}>Comments <strong>({comments?.length})</strong></Button>
                    <div className="pt-3 w-9/12">
                        {comments && show && comments.map((comment: any, index: number) => (
                            <Comment key={index} comment={comment}/>
                        ))}
                    </div>
                </div>
            </Card>
        )
    }
}