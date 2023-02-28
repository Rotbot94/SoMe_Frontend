import {Card} from "flowbite-react";
import Image from "next/image";

export default function Connection(props?: any): JSX.Element {
    const connection = props?.connection ?? null;

    if (!connection || !connection?.isConnected) {
        return (<>
        </>)
    } else {
        return (
            <Card className="w-[300px] h-[200px] m-2 text-center">
                <div className="flex flex-row">
                    <Image width={100} height={100}
                           className="mb-3 h-24 w-24 rounded-full"
                           src={connection?.profileImage}
                           alt="Avatar image"
                    />
                    <div className="ml-3 flex flex-col items-center">
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                            {connection?.name}
                        </h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                    Relation: {connection.relation}
                </span>
                        <div className="mt-4 flex space-x-3 lg:mt-6">
                            <a
                                href="#"
                                className={`${connection?.isConnected ? 'flex' : 'hidden'} inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700`}>
                                Message
                            </a>
                            <a
                                href="#"
                                className={`${connection?.isConnected ? 'hidden' : 'flex'} inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700`}
                            >
                                Add connection
                            </a>
                        </div>
                    </div>
                </div>
            </Card>)
    }
}