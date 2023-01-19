import Image from "next/image";
import React from "react";
import { H4 } from "../../../../utils/Text/H4/H4";
import { P2 } from "../../../../utils/Text/P2/P2";
import s from "./MentorCard.module.scss";

type MentorCardProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
    name: string;
    description: string;
}

const MentorCard: React.FC<MentorCardProps> = ({src, alt, width, height, name, description}) => {
    return (
        <div className={s.card}>
            <div className={s.box__image}>
                <Image layout="intrinsic" src={src} alt={alt} width={width} height={height} />
            </div>
            <H4>{name}</H4>
            <P2>{description}</P2>
        </div>
    )
}

export {MentorCard};