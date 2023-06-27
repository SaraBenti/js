'use client'

import { useEffect, useState } from "react";


function getAlbum() {
    return fetch(`https://jsonplaceholder.typicode.com/albums`)
        .then(res => res.json());
}

export default function AlbumCient() {
    const [list, setList] = useState([]);
    useEffect(() => {
        let mounted = true;
        getAlbum()
            .then(items => {
                if (mounted) {
                    setList(items)
                }
            })
        return () => mounted = false;
    }, [])


    return (
        <ul>
            {list.map((album) => (
                <li key={album.id}>{album.title}</li>
            ))}
        </ul>
    )
}