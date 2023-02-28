import moment from 'moment';

export default function ProfileDescription(props: any) {

    const description = props?.description ?? 'Hi, this is a default description, change me!';
    const createdAt = moment(props?.createdAt).format("MM-YY") ?? 'time is a construct, fool';

    return (
        <div className="w-6/12 bg-[#98CAF1] text-center p-2 mt-2 border-2 rounded text-white">
            <p>
                {description}
            </p>
            <p>Here since: <strong>{createdAt}</strong></p>
        </div>
    )
}