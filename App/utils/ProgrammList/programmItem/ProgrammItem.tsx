import Image from "next/image";
import React from "react";
import {H4} from "../../Text/H4/H4"
import s from "./ProgrammItem.module.scss";

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
                <Image src={src} alt={alt} width={width} height={height} />
                <H4>{name}</H4>
            </div>
        </div>
    )
}

export {ProgrammItem};