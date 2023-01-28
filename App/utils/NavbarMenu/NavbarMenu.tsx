import Link from "next/link";
import React from "react";
import s from "./NavbarMenu.module.scss"

interface INavbarMenu {
    showMenu: boolean;
    setShowMenu: (val: boolean) => void;
}

const NavbarMenu: React.FC<INavbarMenu> = ({showMenu, setShowMenu}) => {
    return (
        <div className={showMenu ? `${s.menu} ${s.active}` :`${s.menu}` }  onClick={() => setShowMenu(false)}>
            <ul className={s.menu__list}>
                <li><Link className="anchor" href={'#about'}>About</Link></li>  
                <li><Link className="anchor" href={'#programs'}>Programs</Link></li>
                <li><Link className="anchor" href={'#steps'}>Steps</Link></li>
                <li><Link className="anchor" href={'#questions'}>Questions</Link></li>
                <li><Link className="anchor" href={'#contact__us'}>Get in touch</Link></li>
            </ul>
        </div>
    )
}

export {NavbarMenu};