import React from "react";
import { Logo } from "../../utils/Logo/Logo";
import { Navbar } from "./Navbar/Navbar";
import { BurgerButton } from "../../utils/BurgerButton/BurgerButton";
import s from "./Header.module.scss";

interface IHeader {
    toggleShowMenu: () => void
}

const Header: React.FC<IHeader> = ({toggleShowMenu}) => {
    return (
        <header className={s.header}>
            <Logo/>
            <Navbar/>
            <BurgerButton toggleShowMenu={toggleShowMenu}/> 
        </header>
    )
}

export {Header};