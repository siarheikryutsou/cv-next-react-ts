"use client"

import styles from './page.module.css';
import setMetadata from "@/shared/consts/setMetaData";

export const metadata = setMetadata({
    title: "Front End Developer"
});

export default function Home() {

    return (
        <div id="page-main" className={styles.main}>
            <h1>Siarhei Kryutsou</h1>
            <h3>Front End Developer</h3>
        </div>
    )
}
