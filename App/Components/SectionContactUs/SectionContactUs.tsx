import React from "react";
import { H2 } from "../../utils/Text/H2/H2";
import { P1 } from "../../utils/Text/P1/P1";
import { Form } from "./Form/Form";
import s from "./SectionContactUs.module.scss";

const SectionContactUs: React.FC = () => {
    return (
        <section className={s.contact__us}>
            <div className={s.contact__wrapper}>
                <H2>Contact  us</H2>
                <P1>Do you have any kind of help please contact with us.</P1>
                <Form/>
                <div className={s.ellipse}></div>
            </div>
        </section>
    )
}
export {SectionContactUs};