import Link from 'next/link'

export default function Menu() {
    return (
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/dashboard">Impostazioni</Link></li>
            <li>Profilo</li>
        </ul>
    )
}