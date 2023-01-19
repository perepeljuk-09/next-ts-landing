import React from "react";
import { Logo } from "../../utils/Logo/Logo";
import { Navbar } from "./Navbar/Navbar";
import s from "./Header.module.scss";


const Header: React.FC = () => {
    return (
        <header className={s.header}>
            <Logo/>
            <Navbar/>  
        </header>
    )
}

export {Header};