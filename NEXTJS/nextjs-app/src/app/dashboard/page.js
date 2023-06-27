import styles from './page.module.css'
import Albums from './albums'
import AlbumCient from './albumsClient'

/*async function getAlbum() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums`)
    return res.json()
}*/

export default function DashboardPage() {

    // Wait for the promises to resolve
    //const list = await getAlbum();

    //console.dir(albums);
    return (
        <main className={styles.main}>
            Ecco gli Album
            <ul>
                <AlbumCient />
            </ul>
        </main>
    )
}