import Image from "next/image";
import React from "react";
import s from "./ProgrammItem.module.scss";
import {H4} from "../../Text/H4/H4"

type ProgrammItemProps = {
    src: string;
    alt: string;
    name: string;
    width: number;
    height: number;
}

const ProgrammItem: React.FC<ProgrammItemProps> = ({src, name, alt, height, width}) => {
    return (
    <div className={s.box}>
        <div className={s.box__content}>
            <Image layout="intrinsic" src={src} alt={alt} width={width} height={height} />
            <H4>{name}</H4>
        </div>
    </div>
    )
}

export {ProgrammItem};