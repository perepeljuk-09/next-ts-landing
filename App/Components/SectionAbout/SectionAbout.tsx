import React from "react";
import { H2 } from "../../utils/Text/H2/H2";
import { Content } from "./Content/Content";
import { Mentors } from "./Mentors/Mentors";
import s from "./SectionAbout.module.scss";


const SectionAbout: React.FC = () => {
    return (
        <section id="about" className={s.about}>   
            <H2>About Us</H2>
            <div className={s.about__box}>
                <Mentors/> 
                <Content />
            </div>
        </section>
    )
}

export {SectionAbout};