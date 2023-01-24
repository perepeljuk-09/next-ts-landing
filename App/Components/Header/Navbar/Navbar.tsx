import React from "react";
import s from "./Navbar.module.scss";
import Link from "next/link";

const Navbar: React.FC = () => {
    return (
        <nav className={s.navbar}>
            <ul className={s.ul__list}>
                <li><Link className="anchor" href={'#about'}>About</Link></li>
                <li><Link className="anchor" href={'#programs'}>Programs</Link></li>
                <li><Link className="anchor" href={'#steps'}>Steps</Link></li>
                <li><Link className="anchor" href={'#questions'}>Questions</Link></li>
                <li><Link className="anchor" href={'#contact__us'}>Get in touch</Link></li>
            </ul>
        </nav>
    )
}
export {Navbar};