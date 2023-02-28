import Post from "@/components/content/posts/post";
import moment from "moment";

export default function Posts(props?: any) {

    const posts = props?.posts ?? [{
        user: 'Gofi',
        createdAt: moment().format("DD-MM-YY").toString(),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        interactions: '🌞',
        comments: [{
            userId: "Intellectual Worlock",
            createdAt: moment().format("DD-MM-YY"),
            content: 'Det var da godt nok en mærkelig hund det der'
        }, {
            userId: "Demo-Vulgar Genius",
            createdAt: moment().format("DD-MM-YY"),
            content: 'Du skylder en æggesandwich, då!'
        }]
    },
        {
            user: 'Gofi',
            createdAt: moment().format("DD-MM-YY").toString(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            interactions: '🌞',
            comments: [{
                userId: "Demo-Insane Ninja",
                createdAt: moment().format("DD-MM-YY"),
                content: 'Det var da godt nok en mærkelig hund det der'
            }, {
                userId: "Tha Bastard",
                createdAt: moment().format("DD-MM-YY"),
                content: 'Du skylder en æggesandwich, då!'
            }]
        }, {
            user: 'Gofi',
            createdAt: moment().format("DD-MM-YY").toString(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            interactions: '🌞',
            comments: [{
                userId: "Kommentator 1",
                createdAt: moment().format("DD-MM-YY"),
                content: 'Det var da godt nok en mærkelig hund det der'
            }, {
                userId: "Kommentator 2",
                createdAt: moment().format("DD-MM-YY"),
                content: 'Du skylder en æggesandwich, då!'
            }]
        }];
    if (posts?.length > 0) {
        return (
            <div className="m-3 w-[300px] md:w-[650px] lg:w-[950px] flex flex-col items-center">
                {posts.map((singlePost: any, index: number) => (
                        <Post key={index} post={singlePost}/>
                    )
                )}
            </div>
        )
    } else {
        return (<div className="w-[300px] md:w-[650px] lg:w-[950px]">No posts yet, add a post to begin!</div>);
    }
}