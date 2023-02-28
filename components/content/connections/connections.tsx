import Connection from "@/components/content/connections/connection";

export default function Connections(props: any) {

    const connections = props?.connections ?? [
        {
            userId: 1,
            name: "Tha Bastard",
            relation: "Family",
            isConnected: true,
            profileImage: 'https://static.wikia.nocookie.net/the-demonic-paradise/images/1/1b/Mars.jpg/revision/latest?cb=20200324211013'
        },
        {
            userId: 2,
            name: "Demo-Insane Ninja",
            relation: "Friend",
            isConnected: true,
            profileImage: "https://static.wikia.nocookie.net/greekmythsencyclopedia/images/9/96/Artemis.jpg/revision/latest?cb=20130104135634"
        },
        {
            userId: 3,
            name: "Demo-Vulgar Genius",
            relation: "Friend",
            isConnected: true,
            profileImage: "https://www.giantbomb.com/a/uploads/scale_medium/1/17172/1443469-zeus_by_thegryph.jpg"
        },
        {
            userId: 4,
            name: "Intellectual Worlock",
            relation: "Friend",
            isConnected: false,
            profileImage: "https://cdn.pixabay.com/photo/2022/12/28/17/59/dionysus-7683512_1280.jpg"
        }
    ];

    if (connections?.length > 0) {
        return (
            <div>
                <div className="m-3 w-[300px] md:w-[650px] lg:w-[950px] flex flex-row flex-wrap">
                        {/*<h5 className="">Friends:</h5>*/}
                        {/*<div>*/}
                            {connections && connections.map((connection: any, index: number) => (
                                <Connection key={index} connection={connection}/>
                            ))}
                        {/*</div>*/}
                    {/*<div>*/}
                    {/*    <h5>Family</h5>*/}
                    {/*    {connections && connections.map((connection: any, index: number) => (*/}
                    {/*        <Connection key={index} connection={connection}/>*/}
                    {/*    ))}*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <h5>Acquaintance</h5>*/}
                    {/*    {connections && connections.map((connection: any, index: number) => (*/}
                    {/*        <Connection key={index} connection={connection}/>*/}
                    {/*    ))}*/}
                    {/*</div>*/}
                </div>
            </div>
        )
    } else {
        return (
            <div className="text-center m-3 w-[300px] md:w-[650px] lg:w-[950px]">
                <p>No connections yet 😔</p>
                <p>Use the 🔍searchbar🔎 above to find people you know!</p>
            </div>);
    }
}
