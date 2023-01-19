import React from "react";
import s from "./Navbar.module.scss";
import Link from "next/link";

const Navbar: React.FC = () => {
    return (
        <ul className={s.ul__list}>
            <li><Link href={'/'}>About</Link></li>
            <li><Link href={'/'}>Programs</Link></li>
            <li><Link href={'/'}>Steps</Link></li>
            <li><Link href={'/'}>Questions</Link></li>
            <li><Link href={'/'}>Get in touch</Link></li>
        </ul>
    )
}
export {Navbar};