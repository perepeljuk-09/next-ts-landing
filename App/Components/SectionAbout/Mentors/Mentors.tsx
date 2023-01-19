import React from "react";
import wade from "./img/Wade Warren.png";
import kristin from "./img/Kristin Watson.png";
import robert from "./img/Robert Fox.png";
import lines from "./img/line.png";
import Image from "next/image";
import { H3 } from "../../../utils/Text/H3/H3";
import { MentorCard } from "./MentorCard/MentorCard";
import s from "./Mentors.module.scss";

type MentorType = {
    id: number;
    src: string;
    alt: string;
    width: number;
    height: number;
    name: string;
    description: string;
}

const Mentors: React.FC = () => {
    const mentors: MentorType[] = [
        {id: 1, name: "Wade Warren", description: "Front-end engineers work closely with designers", src: wade.src, alt: "Wade Warren", width: wade.width, height: wade.height},
        {id: 2, name: "Kristin Watson", description: "Front-end engineers work closely with designers", src: kristin.src, alt: "Kristin Watson", width: kristin.width, height: kristin.height},
        {id: 3, name: "Robert Fox", description: "Front-end engineers work closely with designers", src: robert.src, alt: "Robert Fox", width: robert.width, height: robert.height}
    ] 
    return (
        <div className={s.mentors}>
            <H3>Mentors</H3>
            <Image src={lines.src} alt="lines" width={lines.width} height={lines.height}/>
            <div className={s.mentors__list}>
                {mentors.map( mentor => <MentorCard key={mentor.id} {...mentor} />)}
            </div>
        </div>
    )
}

export {Mentors};