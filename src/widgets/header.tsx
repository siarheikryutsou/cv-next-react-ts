import Link from "next/link";

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                        <Link href="/bio">About</Link>
                        <Link href="/cv">Download CV</Link>
                        <Link href="/contacts">Contacts</Link>
                        <Link href="/recommendations">Recommendations</Link>
                        <Link href="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}