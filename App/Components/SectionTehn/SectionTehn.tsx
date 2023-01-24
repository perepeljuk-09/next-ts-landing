import React from "react";
import { ProgrammList } from "../../utils/ProgrammList/ProgrammList";
import { H2 } from "../../utils/Text/H2/H2";
import { P1 } from "../../utils/Text/P1/P1";
import s from "./SectionTehn.module.scss";

const SectionTehn: React.FC = () => {
    return (
        <section id="programs" className={s.tehn}>
            <H2>Programming technologies</H2>
            <P1>By the end, you’ll have the portfolio and interview skills you need to start your new career.</P1>
            <ProgrammList/>  
        </section>
    )
}

export {SectionTehn};