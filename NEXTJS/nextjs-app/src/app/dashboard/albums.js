export default function Albums(props) {
    const list = props.list;
    //console.dir(list);
    return (
        <ul>
            {list.map((album) => (
                <li key={album.id}>{album.title}</li>
            ))}
        </ul>
    )
}