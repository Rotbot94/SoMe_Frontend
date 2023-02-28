import CommentAvatar from "@/components/content/comment/commentAvatar";
import {Button, Label, TextInput} from "flowbite-react";
import {useState} from "react";

export default function Comment(props: any): JSX.Element {

    const [reply, setReply] = useState(false);

    const comment = props?.comment;
    const handleClick = () => {
        setReply(!reply);
    }

    if (!comment) {
        return (<div>Comment is invalid</div>)
    } else {
        const user = comment.userId ?? 'User';
        const createdAt = comment.createdAt ?? 'Time is a construct';
        const content = comment.content ?? 'No content found for comment';

        return (
            <div className="mt-2 border rounded !min-w-full p-2 flex flex-col items-start">
                <div className="flex flex-row">
                    <CommentAvatar/>
                    <p className="ml-2 mt-2 capitalize">{user}</p>
                </div>
                <strong>@{createdAt}</strong>
                <div>{content}</div>
                <div className="flex flex-row !min-w-full">
                    <Button className={`${reply ? 'hidden' : 'flex'}  mt-2`}
                            onClick={() => handleClick()}>Reply</Button>
                    {reply && <div className=" self-center mt-4 flex flex-col !mx-auto">
                        <div className="flex flex-row">
                            <TextInput className="!grow"
                                       id="comment"
                                       type="text"
                                       name="comment"
                                       placeholder="Your reply..."
                                       required={true}
                            />
                            <Button className="ml-4 grow-0">Reply</Button>
                        </div>
                    </div>}
                </div>

            </div>)
    }
}