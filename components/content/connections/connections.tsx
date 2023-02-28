import Connection from "@/components/content/connections/connection";

export default function Connections(props: any) {

    const connections = props?.connections ?? [
        {
            userId: 1,
            name: "Demo-User",
            relation: "Friend",
            isConnected: true,
        },
        {
            userId: 2,
            name: "Demo-User2",
            relation: "Friend",
            isConnected: true,
        },
        {
            userId: 3,
            name: "Demo-User3",
            relation: "Friend",
            isConnected: true,
        },
        {
            userId: 4,
            name: "Demo-User4",
            relation: "Friend",
            isConnected: false,
        }
    ];

    if (connections?.length > 0) {
        return (
            <div>
                <div className="!min-w-full p-2 text-center flex flex-col">
                    <div>
                        {/*<h5 className="">Friends:</h5>*/}
                        <div>
                            {connections && connections.map((connection: any, index: number) => (
                                <Connection key={index} connection={connection}/>
                            ))}
                        </div>
                    </div>
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
            <div className="m-4">
                <p>No connections yet 😔</p>
                <p>Use the 🔍searchbar🔎 above to find people you know!</p>
            </div>);
    }
}
