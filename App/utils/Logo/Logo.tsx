import React from "react";
import Image from "next/image";
import logo from "./img/logo.png";
import Link from "next/link";
import s from "./Logo.module.scss";

const Logo: React.FC = () => {
    return (
        <div className={s.box__logo}>
            <Link href={'/'}>
                <Image layout="intrinsic" src={logo.src} alt="main logo" width={logo.width} height={logo.height}/>
            </Link>
        </div>
    )
}

export {Logo};