export default function Media(props: any): JSX.Element {
    const media = props?.media ?? [];

    if (media?.length > 0) {
        return (
            <div>
                All this media for you
            </div>
        )
    } else {
        return (<div className="m-4">No media</div>);
    }
}